import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { compileRoutingFilesWasm } from "@spacefast/routing/finalize";
import { matchRedirect } from "@spacefast/routing/match";

import { buildRoutingRules } from "./redirect-rules.mjs";

test("section wildcards fit the route budget without shadowing method aliases", async () => {
  const redirects = JSON.parse(
    await readFile(new URL("../generated/redirects.json", import.meta.url), "utf8"),
  );
  const rules = buildRoutingRules(redirects);
  const compilation = compileRoutingFilesWasm({
    redirects: rules.map(({ from, to, status }) => `${from} ${to} ${status}`).join("\n"),
    configSource: await readFile(new URL("../public/spacefast.jsonc", import.meta.url), "utf8"),
  });
  assert.deepEqual(
    compilation.diagnostics.filter(({ severity }) => severity === "error"),
    [],
  );
  assert.ok(rules.filter(({ from }) => !from.includes("*")).length <= 2_000);
  for (const [source, target] of [
    ["/api/reference/resources/access", "/docs/api/reference#access"],
    [
      "/api/reference/resources/access/methods/approve_space_access_request",
      "/docs/api/reference/access/approvespaceaccessrequest",
    ],
  ]) {
    const result = matchRedirect({
      compilation,
      request: { url: new URL(`https://spacefast.com/docs${source}`), headers: new Headers() },
    });
    assert.equal(result?.action, "redirect");
    assert.equal(result?.target, target);
    assert.equal(result?.status, 301);
  }
});

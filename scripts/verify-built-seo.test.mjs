import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { verifyDiscoveryUrls } from "./verify-built-seo.mjs";

test("discovery verification rejects redirects and slashless pages in emitted URLs and prose", async () => {
  const dist = await mkdtemp(path.join(tmpdir(), "docs-seo-"));
  try {
    await writeFile(path.join(dist, "_redirects"), "/docs/old /docs/api/ 301\n/docs/* /:splat 200\n");
    const served = new Set(["https://spacefast.com/docs/", "https://spacefast.com/docs/api/"]);
    for (const [file, content, error] of [
      ["404.json", JSON.stringify({ resolution: "Try https://spacefast.com/docs/api, then the homepage." }), /Slashless discovery URL/u],
      ["catalog.json", '{"href":"https:\\/\\/spacefast.com\\/docs"}', /Slashless discovery URL/u],
      ["catalog.json", JSON.stringify({ href: "/docs/old/" }), /Redirecting discovery URL/u],
      ["llms.txt", "[API](https://spacefast.com/docs/api#docs)", /Slashless discovery URL/u],
    ]) {
      await writeFile(path.join(dist, file), content);
      await assert.rejects(verifyDiscoveryUrls(dist, [file], served), error);
    }
    await writeFile(path.join(dist, "catalog.json"), JSON.stringify({ href: "/docs/api/#docs", home: "https://spacefast.com/docs/", spec: "/docs/openapi.json", external: "https://api.spacefast.com/v1/docs/search" }));
    await assert.doesNotReject(verifyDiscoveryUrls(dist, ["catalog.json"], served));
  } finally {
    await rm(dist, { recursive: true, force: true });
  }
});

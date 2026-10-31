import assert from "node:assert/strict";
import test from "node:test";

import { compileRoutingFilesWasm } from "@spacefast/routing/finalize";

import redirects from "../generated/redirects.json" with { type: "json" };
import { buildRoutingRules, verifyRoutingBudget } from "./redirect-rules.mjs";

test("the build budget includes the mount rewrite and rejects an 89th dynamic rule", () => {
  const rules = Array.from({ length: 87 }, (_, index) => ({
    from: `/docs/legacy-${index}/*`, to: "/docs/:splat", status: 301,
  }));
  rules.push({ from: "/docs/*", to: "/:splat", status: 200 });
  assert.doesNotThrow(() => verifyRoutingBudget(rules));
  assert.throws(() => verifyRoutingBudget([
    ...rules, { from: "/docs/extra/*", to: "/docs/:splat", status: 301 },
  ]), /89\/88 dynamic/u);
});

test("the complete compatibility map reserves the website's splats and host-specific exact redirects", () => {
  const rules = buildRoutingRules(redirects);
  verifyRoutingBudget(rules);
  const websiteRules = Array.from({ length: 12 }, (_, index) =>
    `/website-legacy-${index}/* /:splat 301`,
  );
  websiteRules.push(...Array.from({ length: 4 }, (_, index) =>
    `https://legacy-${index}.spacefast.com/ https://spacefast.com/ 301`,
  ));
  const compilation = compileRoutingFilesWasm({
    redirects: [
      ...rules.map(({ from, to, status }) => `${from} ${to} ${status}`),
      ...websiteRules,
    ].join("\n"),
  });
  assert.deepEqual(compilation.diagnostics.filter(({ severity }) => severity === "error"), []);
  assert.ok(compilation.stats.dynamicRedirectCount <= 100, JSON.stringify(compilation.stats));
});

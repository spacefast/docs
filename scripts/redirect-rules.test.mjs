import assert from "node:assert/strict";
import test from "node:test";

import { compileRoutingFilesWasm } from "@spacefast/routing/finalize";
import { matchRedirect } from "@spacefast/routing/match";

import redirects from "../generated/redirects.json" with { type: "json" };
import { buildRoutingRules, compileRedirectRules, verifyRoutingBudget } from "./redirect-rules.mjs";

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

test("prunes Partner API and pre-launch OpenAPI alias redirects cleanly", () => {
  const compiled = compileRedirectRules(redirects);
  for (const rule of compiled) {
    assert.ok(!rule.from.startsWith("/partners/"), `unexpected Partner redirect: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/partner-api"), `unexpected Partner redirect: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/platform-api"), `unexpected Partner redirect: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/platforms/api/reference/"), `unexpected Partner redirect: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/api/operations"), `unexpected OpenAPI alias: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/api/reference/operations"), `unexpected OpenAPI alias: ${rule.from}`);
    assert.ok(!rule.from.startsWith("/api/reference/resources"), `unexpected OpenAPI alias: ${rule.from}`);
  }
  assert.ok(compiled.length > 0 && compiled.length < 100, `expected tiny canonical rename set, got ${compiled.length}`);
});

test("the routing map stays well under budget and redirects moved public pages in one hop", () => {
  const rules = buildRoutingRules(redirects);
  verifyRoutingBudget(rules);
  const websiteRules = Array.from({ length: 12 }, (_, index) =>
    `/website-legacy-${index}/* /:splat 301`,
  );
  websiteRules.push(...Array.from({ length: 4 }, (_, index) =>
    `https://legacy-${index}.spacefast.com/ https://spacefast.com/ 301`,
  ));
  // The Website's exact redirects share the static cap with Docs (Website strips
  // Docs' two mount rewrites during composition).
  websiteRules.push(...Array.from({ length: 124 }, (_, index) =>
    `/website-old-${index} /website-new-${index}/ 301`,
  ));
  const composed = compileRoutingFilesWasm({
    redirects: [
      ...rules.filter((rule) => rule.status !== 200).map(({ from, to, status }) => `${from} ${to} ${status}`),
      ...websiteRules,
    ].join("\n"),
  });
  assert.deepEqual(composed.diagnostics.filter(({ severity }) => severity === "error"), []);
  assert.ok(composed.stats.staticRedirectCount <= 2000, JSON.stringify(composed.stats));
  assert.ok(composed.stats.dynamicRedirectCount <= 100, JSON.stringify(composed.stats));

  const compilation = compileRoutingFilesWasm({
    redirects: rules.map(({ from, to, status }) => `${from} ${to} ${status}`).join("\n"),
  });
  assert.deepEqual(compilation.diagnostics.filter(({ severity }) => severity === "error"), []);
  assert.ok(compilation.stats.dynamicRedirectCount <= 10, JSON.stringify(compilation.stats));
  for (const [source, destination] of [
    ["/access", "/share/"],
    ["/routing", "/redirects/"],
    ["/zero-runtime", "/zero-migration/"],
    ["/cli/domains", "/cli/reference/#sf-domains"],
    ["/api/reference/account/getv1authemails", "/api/reference/account/listaccountemails/"],
  ]) {
    const url = new URL(`https://spacefast.com/docs${source}?from=test`);
    const first = matchRedirect({ compilation, request: { url, headers: new Headers() } });
    assert.equal(first?.action, "redirect");
    assert.equal(new URL(first.target, url).href, `https://spacefast.com/docs${destination.split("#")[0]}?from=test${destination.includes("#") ? `#${destination.split("#")[1]}` : ""}`);
    const second = matchRedirect({ compilation, request: { url: new URL(first.target, url), headers: new Headers() } });
    assert.equal(second?.action, "rewrite", `${source} must redirect directly to its final page`);
  }
});

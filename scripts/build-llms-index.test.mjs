import assert from "node:assert/strict";
import test from "node:test";

import { buildLlmsIndex, discoveryFileForUrl, routeOf } from "./build-llms-index.mjs";
import { routesFromSidebar } from "./sidebar-routes.mjs";

const entry = (route, title = route) =>
  `- [${title}](https://spacefast.com/docs${route === "/" ? "" : route}): A summary.`;

const sidebarRoutes = new Set([
  "/",
  "/publish",
  "/errors",
  "/api/reference",
  "/changelog",
  "/changelog/packages",
]);

const fixture = [
  "# Spacefast Docs",
  "",
  "> Publish sites and build apps with Spacefast.",
  "",
  "## Read any page as Markdown",
  "",
  "Header prose.",
  "",
  "## Docs",
  "",
  entry("/"),
  "",
  "## Publish",
  "",
  entry("/publish"),
  "",
  "## Reference",
  "",
  entry("/errors"),
  entry("/api/reference"),
  entry("/platforms/api/reference"),
  entry("/changelog/packages"),
  "",
  "### Spaces",
  "",
  "## Other",
  "",
  entry("/errors/rate_limited"),
  entry("/errors/build_failed"),
  entry("/api/reference/spaces/create"),
  entry("/platforms/api/reference/principals/list"),
  entry("/changelog/v0-0-24"),
  entry("/changelog/packages/sdk"),
  entry("/setup/claude-code"),
  "",
  "## Discovery",
  ...["/llms-full.txt", "/index.md", "/api/docs/pages.json", "/.well-known/api-catalog", "/.well-known/ai-catalog.json", "/agent-readability.json"].map((route) => entry(route)),
  "",
  "## RSS Feeds",
  "",
  "- [Changelog](https://spacefast.com/docs/changelog/rss.xml)",
  "",
].join("\n");

const build = (overrides = {}) =>
  buildLlmsIndex({ source: fixture, sidebarRoutes, ...overrides });

test("collapses generated descendants and keeps only navigated index pages", () => {
  const { text, dropped } = build();
  assert.equal(dropped, 7);
  const routes = text
    .split("\n")
    .filter((line) => line.startsWith("- ["))
    .map(routeOf);
  for (const kept of ["/errors", "/api/reference", "/changelog/packages"]) {
    assert.ok(routes.includes(kept), `${kept} should survive as the family index`);
  }
  for (const gone of [
    "/errors/rate_limited",
    "/api/reference/spaces/create",
    "/platforms/api/reference",
    "/changelog/v0-0-24",
  ]) {
    assert.ok(!routes.includes(gone), `${gone} should be collapsed`);
  }
  assert.ok(routes.includes("/setup/claude-code"), "agent setup pages stay listed");
  assert.ok(!text.includes("### Spaces"), "a reference tag heading without entries is dropped");
  assert.ok(text.includes("## Reference"), "a heading that keeps entries survives");
  assert.ok(text.includes("## Read any page as Markdown"), "a prose section survives");
});

test("drops generated pages that moved out of the Other bucket", () => {
  // The reason the rule keys on route and never on heading: Blume files a page
  // by walking the sidebar, so adding error pages there moves them into a named
  // section. A heading-based filter would stop seeing them; this must not.
  const moved = fixture.replace(
    `${entry("/platforms/api/reference")}\n${entry("/changelog/packages")}`,
    `${entry("/platforms/api/reference")}\n${entry("/changelog/packages")}\n${entry("/errors/rate_limited")}`,
  );
  const { text } = build({ source: moved });
  assert.ok(!text.includes("/docs/errors/rate_limited)"));
  assert.ok(!text.includes("/docs/errors/rate_limited:"));
});

test("keeps a generated page the sidebar explicitly promotes", () => {
  const promoted = new Set([...sidebarRoutes, "/errors/rate_limited"]);
  const { text } = build({ sidebarRoutes: promoted });
  assert.ok(text.includes("https://spacefast.com/docs/errors/rate_limited"));
});

test("relabels the leftover bucket and drops emptied headings", () => {
  const { text } = build();
  assert.ok(!text.includes("## Other"), "the Other label should not survive");
  assert.ok(text.includes("## Agent setup"));
  assert.ok(text.includes("## RSS Feeds"), "feeds are not pages and are never collapsed");
  for (const route of ["/changelog/rss.xml", "/llms-full.txt", "/index.md", "/.well-known/api-catalog", "/agent-readability.json"]) {
    assert.ok(text.includes(`https://spacefast.com/docs${route}`));
    assert.equal(discoveryFileForUrl(`https://spacefast.com/docs${route}`), route.slice(1));
  }
  assert.equal(discoveryFileForUrl("https://example.test/feed.xml"), undefined);
  assert.equal(discoveryFileForUrl("https://spacefast.com/docs-other/feed.xml"), undefined);
  for (const route of ["/../outside.xml", "/%2e%2e/outside.xml", "/nested/./feed.xml"]) {
    assert.throws(() => discoveryFileForUrl(`https://spacefast.com/docs${route}`), /Non-canonical/u);
  }
});

test("throws when an unrecognized generated family survives", () => {
  const invaded = fixture.replace(entry("/setup/claude-code"), entry("/widgets/blue"));
  assert.throws(() => build({ source: invaded }), /widgets\/blue/u);
});

test("throws when nothing was collapsed, so a second run cannot mangle the file", () => {
  const { text } = build();
  assert.throws(() => build({ source: text }), /No entries were collapsed/u);
});

test("throws when Blume's output has no headings or entries", () => {
  assert.throws(() => build({ source: "# Spacefast Docs\n" }), /output format changed/u);
});

test("throws when the result would exceed the size ceiling", () => {
  const bloat = Array.from({ length: 900 }, (_, index) => entry(`/publish/page-${index}`));
  const huge = fixture.replace(entry("/publish"), [entry("/publish"), ...bloat].join("\n"));
  const routes = new Set([...sidebarRoutes, ...bloat.map(routeOf)]);
  assert.throws(() => build({ source: huge, sidebarRoutes: routes }), /byte ceiling/u);
});

test("the sidebar parser agrees with the real config", async () => {
  const { readSidebarRoutes } = await import("./sidebar-routes.mjs");
  const routes = await readSidebarRoutes(new URL("..", import.meta.url).pathname);
  assert.ok(routes.has("/errors"));
  assert.ok(routes.has("/changelog"));
  assert.ok(routes.size > 40);
});

test("the sidebar parser rejects a config it cannot read", () => {
  assert.throws(() => routesFromSidebar("export default {}"), /Could not locate the sidebar/u);
  assert.throws(() => routesFromSidebar("sidebar: []\nopenapi: {}"), /declares no routes/u);
});

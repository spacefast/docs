import { redirects as authoredRedirects } from "../redirects.ts";

import { verifyBuiltSeo } from "./verify-built-seo.mjs";

import referenceAliases from "./reference-aliases.json" with { type: "json" };

import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { compileRoutingFilesWasm } from "@spacefast/routing/finalize";
import { matchRedirect } from "@spacefast/routing/match";

import {
  buildRoutingRules,
  deploymentBase,
  markdownTwinRules,
} from "./redirect-rules.mjs";
import { discoveryFileForUrl } from "./build-llms-index.mjs";
import { readSidebarRoutes } from "./sidebar-routes.mjs";

const root = path.resolve(process.cwd());
const dist = path.join(root, "dist");
const site = "https://spacefast.com";
const docsRoot = `${site}${deploymentBase}`;
// The home page is the one URL that can appear bare (origin) or based.
const corpusKey = (url) => {
  const normalized = url.replace(/\/$/u, "");
  return normalized === site ? docsRoot : normalized;
};
const checked = [];

const existence = new Map();
async function exists(value) {
  if (existence.has(value)) return existence.get(value);
  try {
    await access(value);
    existence.set(value, true);
    return true;
  } catch {
    existence.set(value, false);
    return false;
  }
}

async function requireFile(relativePath) {
  const value = path.join(dist, relativePath);
  const details = await stat(value).catch(() => null);
  if (!details?.isFile()) {
    throw new Error(`Missing built file: dist/${relativePath}`);
  }
  checked.push(relativePath);
  return value;
}

async function readBuilt(relativePath) {
  return readFile(await requireFile(relativePath), "utf8");
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "iu"));
  return match?.[1];
}

function canonicalFrom(html) {
  for (const match of html.matchAll(/<link\b[^>]*>/giu)) {
    if (attribute(match[0], "rel") === "canonical") {
      return attribute(match[0], "href");
    }
  }
  return undefined;
}

function hasPagefindIgnore(html) {
  return /<html\b[^>]*\bdata-pagefind-ignore=["']all["'][^>]*>/iu.test(html);
}

async function requirePage(relativePath, expectedCanonical, expectedText) {
  const html = await readBuilt(relativePath);
  const canonical = canonicalFrom(html);
  if (canonical !== `${expectedCanonical.replace(/\/$/u, "")}/`) {
    throw new Error(`Wrong canonical in dist/${relativePath}: ${canonical ?? "missing"}`);
  }
  if (!/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/iu.test(html)) {
    throw new Error(`Missing structured data in dist/${relativePath}`);
  }
  if (expectedText && !html.includes(expectedText)) {
    throw new Error(`Missing expected content in dist/${relativePath}`);
  }
  if (hasPagefindIgnore(html)) {
    throw new Error(`Indexable page is excluded from Pagefind in dist/${relativePath}`);
  }
}

async function htmlFilesUnder(directory, relative = "") {
  const entries = await readdir(path.join(directory, relative), {
    withFileTypes: true,
  });
  const files = [];
  for (const entry of entries) {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await htmlFilesUnder(directory, child)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(child.split(path.sep).join("/"));
    }
  }
  return files;
}

function localTargetFor(url) {
  const pathname = url.split(/[?#]/u, 1)[0];
  if (pathname === "/") {
    return "index.html";
  }
  const relative = pathname.replace(/^\/+/u, "");
  if (path.extname(relative)) return relative;
  return `${relative.replace(/\/$/u, "")}/index.html`;
}

function representativeRedirect(redirect) {
  if (!redirect.from.includes("*")) {
    return { source: redirect.from, destination: redirect.to };
  }
  const source = redirect.from.replace("*", "quickstart");
  const destination = redirect.to.replace(":splat", "quickstart");
  if (source.includes("*") || destination.includes(":splat")) {
    throw new Error(`Unsupported compatibility wildcard: ${redirect.from} -> ${redirect.to}`);
  }
  return { source, destination };
}

if (!(await exists(dist))) {
  throw new Error("Missing dist/. Run `bun run build` first.");
}
// Every authored route and generated reference index must build an indexable page.
const requiredIaRoutes = [...(await readSidebarRoutes(root))];
if (requiredIaRoutes.length === 0) {
  throw new Error("The content directory declares no routes.");
}
const representativePages = [
  ["index.html", docsRoot, "Spacefast hosts"],
  ["quickstart/index.html", `${docsRoot}/quickstart`, "Before you start"],
  ["publish/index.html", `${docsRoot}/publish`, "What gets uploaded"],
  ["versions/index.html", `${docsRoot}/versions`, "immutable"],
  ["agents/mcp-server/index.html", `${docsRoot}/agents/mcp-server`, "MCP"],
  ["api/index.html", `${docsRoot}/api`, "Response envelopes"],
  ["api/reference/index.html", `${docsRoot}/api/reference`, "Spacefast API"],
  ["cli/index.html", `${docsRoot}/cli`, "Global flags"],
  ["cli/reference/index.html", `${docsRoot}/cli/reference`, "CLI reference"],
  ["errors/index.html", `${docsRoot}/errors`, "Error reference"],
  ["errors/rate_limited/index.html", `${docsRoot}/errors/rate_limited`, "rate_limited"],
  ["recipes/vite/index.html", `${docsRoot}/recipes/vite`, "Vite"],
  ["zero-runtime/index.html", `${docsRoot}/zero-runtime`, "What Zero is"],
];
for (const page of representativePages) {
  await requirePage(...page);
}
for (const route of requiredIaRoutes) {
  await requirePage(localTargetFor(route), route === "/" ? docsRoot : `${docsRoot}${route}`);
}

const notFound = await readBuilt("404.html");
if (!notFound.includes("Page not found") || !notFound.includes(`href="${deploymentBase}/"`)) {
  throw new Error("Built 404 does not link back to the docs site.");
}

for (const artifact of [
  "index.md",
  "index.mdx",
  "quickstart.md",
  "quickstart.mdx",
  "api/reference.md",
  "cli.md",
  "cli/reference.md",
  "errors/rate_limited.md",
  "llms.txt",
  "llms-full.txt",
  "sitemap.xml",
  "robots.txt",
  "agent-readability.json",
  "docs-corpus.json",
  "pagefind/pagefind.js",
  "pagefind/pagefind-entry.json",
  "_redirects",
  "_headers",
  "spacefast.jsonc",
]) {
  await requireFile(artifact);
}

for (const serverArtifact of [
  "api/ask",
  "api/ask/index.html",
  "api/search",
  "api/search/index.html",
  ".well-known/mcp.json",
  ".well-known/mcp/server-card.json",
  "blume-search.json",
]) {
  if (await exists(path.join(dist, serverArtifact))) {
    throw new Error(`Static build unexpectedly emitted dist/${serverArtifact}`);
  }
}

const pagefindEntry = JSON.parse(await readBuilt("pagefind/pagefind-entry.json"));
const indexedPages = Object.values(pagefindEntry.languages ?? {}).reduce(
  (total, language) => total + (language.page_count ?? 0),
  0,
);
if (indexedPages < 820) {
  throw new Error(`Pagefind indexed only ${indexedPages} pages.`);
}
const headers = await readBuilt("_headers");
if (
  !headers.includes(`${deploymentBase}/pagefind/*`) ||
  !headers.includes("Access-Control-Allow-Origin: *")
) {
  throw new Error("Built headers do not allow the consumer site to merge the Pagefind index.");
}
if (!headers.includes(`${deploymentBase}/*\n  Access-Control-Allow-Origin: *`)) {
  throw new Error("Built headers do not expose Docs artifacts cross-origin.");
}

const sitemap = await readBuilt("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
const sitemapExpected = representativePages.map(([, canonical]) => canonical);
for (const expected of sitemapExpected) {
  if (!sitemapUrls.includes(`${expected}/`)) {
    throw new Error(`Sitemap is missing ${expected}`);
  }
}
if (
  sitemapUrls.some((url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot && url !== site)
) {
  throw new Error("Sitemap contains a URL outside the docs origin.");
}
if (new Set(sitemapUrls).size !== sitemapUrls.length) {
  throw new Error("Sitemap contains duplicate URLs.");
}
// Owner rule: every content page is indexable, searchable, and advertised in
// the sitemap. Redirect documents are not content pages and Blume correctly
// marks them noindex. The generated `/setup` pages are the one place content
// is duplicated across surfaces (spec §5.1) — they stay indexable and
// searchable and instead declare a canonical straight at the www copy that
// owns that content, so Blume leaves them out of the Docs sitemap.
const htmlFiles = await htmlFilesUnder(dist);
for (const file of htmlFiles) {
  const html = await readBuilt(file);
  const isRedirect = /<meta\s+http-equiv="refresh"/u.test(html);
  if (!isRedirect && /<meta\s+name="robots"\s+content="[^"]*noindex/u.test(html)) {
    throw new Error(`dist/${file} is noindex — this site never noindexes a page.`);
  }
}
// Each generated setup page's route, relative to its site: `setup/`, `setup/codex/`.
const setupRoutes = htmlFiles
  .filter((file) => /^setup\/(?:[^/]+\/)?index\.html$/u.test(file))
  .map((file) => file.replace(/index\.html$/u, ""));
if (setupRoutes.length < 2) {
  throw new Error("Expected generated /setup pages in the build; none are present.");
}
for (const route of setupRoutes) {
  const expected = `<link rel="canonical" href="https://spacefast.com/docs/${route}">`;
  if (!(await readBuilt(`${route}index.html`)).includes(expected)) {
    throw new Error(`dist/${route}index.html does not declare its self canonical (${expected}).`);
  }
}
// The sidebar override (components/Sidebar.astro) links pages across tabs.
// Check the rendered sidebars, so a Blume change that drops the override fails here.
const sidebarOf = async (file) => {
  const html = await readBuilt(file);
  const start = html.indexOf("<nav data-blume-nav-tree");
  if (start < 0) throw new Error(`dist/${file} has no sidebar.`);
  return html.slice(start, html.indexOf("</aside>", start));
};
const sidebarExpectations = [
  ["quickstart/index.html", ["/cli", "/agents"], ["/setup/vscode", "Other agents"]],
  ["agents/index.html", ["/agents/mcp-server", "/setup/vscode", "Other agents"], ["/setup/codex"]],
  ["setup/vscode/index.html", ["/agents/mcp-server", "/setup/chatgpt", "Other agents"], ["/quickstart"]],
  ["cli/agents/index.html", ["/cli/reference"], ["Other agents", "/setup/vscode"]],
];
for (const [file, present, absent] of sidebarExpectations) {
  const sidebar = await sidebarOf(file);
  const has = (needle) =>
    needle.startsWith("/") ? sidebar.includes(`href="${deploymentBase}${needle}/"`) : sidebar.includes(needle);
  const missing = present.filter((needle) => !has(needle));
  const unexpected = absent.filter(has);
  if (missing.length > 0 || unexpected.length > 0) {
    throw new Error(
      `dist/${file} sidebar is wrong: missing [${missing.join(", ")}], unexpected [${unexpected.join(", ")}].`,
    );
  }
}
// Docs previous/next skip the generated /setup pages; /setup keeps Blume's order.
for (const [file, prev, next] of [
  ["troubleshooting/index.html", "/quickstart", "/spaces"],
  ["spaces/index.html", "/troubleshooting", "/versions"],
  ["setup/vscode/index.html", "/setup/cursor", "/setup/github-copilot"],
]) {
  const pager = (await readBuilt(file)).split("</article>").at(-1);
  const links = [...pager.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gu)];
  const got = ["Previous", "Next"].map((label) => links.find(([, , body]) => body.includes(label))?.[1]);
  const want = [prev, next].map((route) => `${deploymentBase}${route}/`);
  if (got.join() !== want.join()) {
    throw new Error(`dist/${file} pagination is wrong: expected ${want.join(" / ")}, got ${got.join(" / ")}.`);
  }
}
// Visible breadcrumbs and schema are verified for every content page below.

// The public docs corpus that search and the LLM files carry: the sitemap,
// without the generated changelog timeline (it has no article; every entry it
// lists is a page of its own), plus the /setup pages the sitemap leaves out
// because their canonical is on www.
const generatedChangelogUrl = `${docsRoot}/changelog`;
if (!sitemapUrls.some((url) => url.replace(/\/$/u, "") === generatedChangelogUrl)) {
  throw new Error(
    `Sitemap is missing the generated changelog timeline at ${generatedChangelogUrl}`,
  );
}
const corpusUrls = [
  ...sitemapUrls.filter((url) => url.replace(/\/$/u, "") !== generatedChangelogUrl),
  ...setupRoutes.map((route) => `${docsRoot}/${route}`).filter((url) => !sitemapUrls.includes(url)),
  ...htmlFiles.filter((file) => file.startsWith("platforms/api/reference/") && !file.endsWith("reference/index.html")).map((file) => `${docsRoot}/${file.replace(/index\.html$/u, "")}`).filter((url) => !sitemapUrls.includes(url)),
];
if (indexedPages !== corpusUrls.length) {
  throw new Error(
    `Search/corpus count mismatch: ${indexedPages} indexed, ${corpusUrls.length} public docs pages.`,
  );
}
const robots = await readBuilt("robots.txt");
if (!robots.includes(`Sitemap: ${docsRoot}/sitemap.xml`)) {
  throw new Error("robots.txt does not advertise the docs sitemap.");
}

// llms.txt is a curated index, not a mirror of the sitemap: the generated error
// pages, API operations, and per-release changelog entries are collapsed to
// their index pages by scripts/build-llms-index.mjs, because ~1,100 operation
// titles ahead of anything actionable is worse than useless to an agent. What
// survives is the authored route set plus the generated agent setup pages, and that is the
// invariant checked here. Only link targets count; the preamble's prose and
// code samples mention docs URLs that are illustrations, not entries.
const llmsIndex = await readBuilt("llms.txt");
// Blume places the agent guidance (agents.llmsTxt.details) after the summary.
const guidance = llmsIndex.indexOf("## Read any page as Markdown");
if (guidance < 0 || guidance > llmsIndex.indexOf("\n## Docs")) {
  throw new Error("llms.txt does not lead with the agent guidance from content/_llms-preamble.md.");
}
for (const match of llmsIndex.matchAll(/\]\((https:\/\/[^)]+)\)/gu)) {
  const file = discoveryFileForUrl(match[1]);
  if (file !== undefined) await requireFile(file);
}
const llmsPageUrls = llmsIndex
  .split("\n")
  .filter((line) => line.startsWith("- ["))
  .flatMap((line) => [...line.matchAll(/\]\((https:\/\/[^)]+)\)/gu)].map((match) => match[1]))
  .filter((url) => discoveryFileForUrl(url) === undefined);
if (llmsPageUrls.length === 0) {
  throw new Error("llms.txt lists no pages.");
}
if (
  llmsPageUrls.some((url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot && url !== site)
) {
  throw new Error("llms.txt has non-docs page URLs.");
}
const llmsRoutes = new Set(
  llmsPageUrls.map((url) => {
    const route = url.slice(docsRoot.length).replace(/\/$/u, "");
    return route === "" ? "/" : route;
  }),
);
const strayLlmsRoutes = [...llmsRoutes].filter(
  (route) => !requiredIaRoutes.includes(route) && !route.startsWith("/setup"),
);
if (strayLlmsRoutes.length > 0) {
  throw new Error(
    `llms.txt lists routes that are neither authored nor generated agent setup pages: ${strayLlmsRoutes.join(", ")}`,
  );
}
const missingLlmsRoutes = requiredIaRoutes.filter((route) => !llmsRoutes.has(route));
if (missingLlmsRoutes.length > 0) {
  throw new Error(`llms.txt is missing authored routes: ${missingLlmsRoutes.join(", ")}`);
}
for (const route of llmsRoutes) {
  if (!(await exists(path.join(dist, localTargetFor(route))))) {
    throw new Error(`llms.txt links a page that is not in the build: ${docsRoot}${route}`);
  }
}
// Each collapsed family contributes its index page and nothing more. This is
// what stops the "## Other" pile from quietly returning.
for (const collapsed of ["/errors", "/api/reference", "/changelog"]) {
  const descendants = [...llmsRoutes].filter((route) => route.startsWith(`${collapsed}/`));
  const unexpected = descendants.filter((route) => !requiredIaRoutes.includes(route));
  if (unexpected.length > 0) {
    throw new Error(
      `llms.txt enumerates generated pages under ${collapsed} instead of linking its index: ${unexpected.slice(0, 5).join(", ")}`,
    );
  }
}
const llmsBytes = Buffer.byteLength(llmsIndex, "utf8");
if (llmsBytes > 32 * 1024) {
  throw new Error(`llms.txt is ${llmsBytes} bytes. It is an index for agents, not a sitemap.`);
}

const llmsFull = await readBuilt("llms-full.txt");
const sourceUrls = [...llmsFull.matchAll(/^Source: (https:\/\/[^\s]+)$/gmu)].map(
  (match) => match[1],
);
const corpusKeys = new Set(corpusUrls.map(corpusKey));
if (
  sourceUrls.length !== corpusUrls.length ||
  sourceUrls.some((url) => !corpusKeys.has(corpusKey(url)))
) {
  throw new Error("llms-full.txt and the public docs corpus disagree.");
}

const corpus = JSON.parse(await readBuilt("docs-corpus.json"));
if (
  corpus.schemaVersion !== 1 ||
  typeof corpus.revision !== "string" ||
  corpus.revision.length < 7 ||
  corpus.pages.length !== sourceUrls.length ||
  corpus.pages.some((page) => !sourceUrls.some((url) => corpusKey(url) === corpusKey(page.url)))
) {
  throw new Error("docs-corpus.json does not match the unified docs LLM corpus.");
}

const readability = JSON.parse(await readBuilt("agent-readability.json"));
for (const value of Object.values(readability.artifacts)) {
  if (
    typeof value === "string" &&
    value.startsWith(site) &&
    !value.startsWith(docsRoot) &&
    value !== site
  ) {
    throw new Error("agent-readability.json advertises an artifact outside the docs origin.");
  }
}
if (
  readability.artifacts.askApi !== "https://api.spacefast.com/v1/docs/ask" ||
  "mcp" in readability.artifacts
) {
  throw new Error(
    "agent-readability.json must advertise the external Ask API and keep Blume MCP disabled.",
  );
}

const staticConfig = JSON.parse(await readBuilt("spacefast.jsonc"));
if (
  staticConfig.$schema !== "https://spacefast.com/schemas/sf.json" ||
  staticConfig.cleanUrls !== true ||
  staticConfig.fallback?.path !== "404.html" ||
  staticConfig.fallback?.status !== 404
) {
  throw new Error("dist/spacefast.jsonc does not carry the static serving contract.");
}

const [generatedRedirects, builtRedirects] = await Promise.all([
  readFile(path.join(root, "generated/redirects.json"), "utf8").then(JSON.parse),
  readBuilt("_redirects"),
]);
const routingRules = buildRoutingRules(generatedRedirects);
const compilation = compileRoutingFilesWasm({
  redirects: builtRedirects,
  headers,
  configSource: JSON.stringify(staticConfig),
});
if (compilation.diagnostics.some(({ severity }) => severity === "error")) {
  throw new Error("The built Docs routing configuration does not compile.");
}
if (await exists(path.join(dist, "storage"))) {
  throw new Error("The docs build must not emit files under the reserved /storage runtime path.");
}
// Retired authored routes must be real one-hop HTTP redirects, followed only
// by the internal mount rewrite. The query string survives both operations.
for (const { from, to } of authoredRedirects) {
  for (const suffix of ["", "/"]) {
    const source = new URL(`${docsRoot}${from}${suffix}?source=route-check&value=a%2Fb`);
    const first = matchRedirect({ compilation, request: { url: source, headers: new Headers() } });
    if (first?.action !== "redirect" || first.status !== 301) throw new Error(`Missing HTTP redirect: ${source}`);
    const target = new URL(first.target, source);
    if (!target.pathname.endsWith("/") || target.search !== source.search) throw new Error(`Non-final redirect target: ${source}`);
    const second = matchRedirect({ compilation, request: { url: target, headers: new Headers() } });
    if (second?.action !== "rewrite") throw new Error(`Redirect chain: ${source} -> ${target}`);
    await requireFile(localTargetFor(target.pathname.slice(deploymentBase.length)));
  }
}
for (const { from, to } of markdownTwinRules) {
  const matched = matchRedirect({
    compilation,
    request: {
      url: new URL(`${docsRoot}${from.slice(deploymentBase.length)}?source=markdown&value=a%2Fb`),
      headers: new Headers(),
    },
  });
  const destination = matched?.action === "redirect" ? new URL(matched.target, docsRoot) : null;
  if (
    matched?.action !== "redirect" || matched.status !== 301 ||
    destination?.pathname !== to || destination.search !== "?source=markdown&value=a%2Fb"
  ) {
    throw new Error(`A retired page's Markdown URL must 301 to its replacement: ${from} -> ${to}`);
  }
  await requireFile(localTargetFor(to.slice(deploymentBase.length)));
}
const expectedRedirects = `${routingRules
  .map(({ from, status, to }) => `${from} ${to} ${status}`)
  .join("\n")}\n`;
if (
  !builtRedirects.startsWith("# Generated from generated/redirects.json. Do not edit.\n") ||
  builtRedirects !== `# Generated from generated/redirects.json. Do not edit.\n${expectedRedirects}`
) {
  throw new Error("Built redirects do not match the generated compatibility map.");
}
// The platform applies a routing rule before it serves a file, so a redirect
// whose source is a built page hides that page.
const shadowedPages = [];
for (const { from, status } of routingRules) {
  if (from.includes("*") || status < 300) continue;
  const file = localTargetFor(from.slice(deploymentBase.length) || "/");
  const html = await readBuilt(file).catch(() => null);
  if (html !== null && !/<meta\s+http-equiv="refresh"/u.test(html)) shadowedPages.push(from);
}
if (shadowedPages.length > 0) {
  throw new Error(`Routing rules redirect away from built pages: ${shadowedPages.join(", ")}`);
}
for (const redirect of [...generatedRedirects, ...referenceAliases]) {
  const example = representativeRedirect(redirect);
  const canonicalDestination = example.destination.replace(
    "/partners/api/reference",
    "/platforms/api/reference",
  );
  const target = localTargetFor(canonicalDestination);
  if (!(await exists(path.join(dist, target)))) {
    throw new Error(`Redirect destination is missing: ${example.source} -> ${example.destination}`);
  }
  let url = new URL(`${docsRoot}${example.source}?source=compatibility&value=a%2Fb`);
  const hops = [];
  for (let hop = 0; hop < 5; hop += 1) {
    const matched = matchRedirect({ compilation, request: { url, headers: new Headers() } });
    if (!matched || matched.action === "rewrite") break;
    hops.push(matched);
    if (matched.action !== "redirect") break;
    url = new URL(matched.target, url);
  }
  if (
    // Served pages carry a trailing slash; the compatibility map is slashless.
    `${url.pathname.replace(/(?<=.)\/$/u, "")}${url.hash}` !== `${deploymentBase}${canonicalDestination}`.replace(/(?<=.)\/(?=#|$)/u, "") ||
    url.search !== "?source=compatibility&value=a%2Fb" ||
    hops.length < 1 ||
    hops.some(({ action, status }) => action !== "redirect" || status !== redirect.status)
  ) {
    throw new Error(
      `Built routing rules do not preserve compatibility: ${example.source} -> ${example.destination}`,
    );
  }
}
for (const file of htmlFiles) {
  const html = await readFile(path.join(dist, file), "utf8");
  for (const match of html.matchAll(/\b(?:action|href|src)=["'](\/[^"']*)["']/giu)) {
    const url = match[1];
    if (url.startsWith("//")) continue;
    if (url !== deploymentBase && !url.startsWith(`${deploymentBase}/`)) {
      throw new Error(`Built URL misses the ${deploymentBase} base in dist/${file}: ${url}`);
    }
    const target = localTargetFor(url.slice(deploymentBase.length) || "/");
    if (!(await exists(path.join(dist, target)))) {
      throw new Error(`Broken built URL in dist/${file}: ${url} -> dist/${target}`);
    }
  }
}

console.log(
  `Route verification passed: all ${requiredIaRoutes.length} IA routes, ${htmlFiles.length} HTML pages, ${indexedPages} Pagefind records, ${sitemapUrls.length} sitemap URLs, ${corpusUrls.length} LLM/corpus pages, ${routingRules.length} routing rules covering ${generatedRedirects.length + referenceAliases.length} compatibility URLs, and every root-relative URL resolves.`,
);

await verifyBuiltSeo(dist);

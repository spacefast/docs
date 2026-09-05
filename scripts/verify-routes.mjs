import referenceAliases from "./reference-aliases.json" with { type: "json" };

import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

import {
  buildRoutingRules,
  compileRedirectRules,
  deploymentBase,
  resolveRedirect,
} from "./redirect-rules.mjs";
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

async function exists(value) {
  try {
    await access(value);
    return true;
  } catch {
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
  const canonical = canonicalFrom(html)?.replace(/\/$/u, "");
  if (canonical !== expectedCanonical.replace(/\/$/u, "")) {
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
  ["zero/index.html", `${docsRoot}/zero`, "What Zero is"],
];
for (const page of representativePages) {
  await requirePage(...page);
}
for (const route of requiredIaRoutes) {
  await requirePage(localTargetFor(route), route === "/" ? docsRoot : `${docsRoot}${route}`);
}

const notFound = await readBuilt("404.html");
if (!notFound.includes("Page not found") || !notFound.includes(`href="${deploymentBase}"`)) {
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
if (
  !headers.includes(`${deploymentBase}/*\n  Access-Control-Allow-Origin: *`) ||
  headers.includes(`${deploymentBase}/*.md`) ||
  headers.includes(`${deploymentBase}/*.mdx`) ||
  headers.includes(`${deploymentBase}/*.txt`)
) {
  throw new Error("Built headers do not expose Docs artifacts through valid routing patterns.");
}

const sitemap = await readBuilt("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
const sitemapExpected = representativePages.map(([, canonical]) => canonical);
for (const expected of sitemapExpected) {
  if (!sitemapUrls.some((url) => url.replace(/\/$/u, "") === expected)) {
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
// marks them noindex. The generated `/setup/*` pages are the one place content
// is duplicated across surfaces (spec §5.1) — they stay indexable and instead
// declare a canonical straight at the www copy that owns that content for
// search, which the audit accepts and the sitemap still lists.
for (const file of await htmlFilesUnder(dist)) {
  const html = await readBuilt(file);
  const isRedirect = /<meta\s+http-equiv="refresh"/u.test(html);
  if (!isRedirect && /<meta\s+name="robots"\s+content="[^"]*noindex/u.test(html)) {
    throw new Error(`dist/${file} is noindex — this site never noindexes a page.`);
  }
}
const setupFiles = (await htmlFilesUnder(dist)).filter((file) =>
  /^setup\/[^/]+\/index\.html$/u.test(file),
);
if (setupFiles.length === 0) {
  throw new Error("Expected generated /setup pages in the build; none are present.");
}
for (const file of setupFiles) {
  const html = await readBuilt(file);
  const id = file.split("/")[1];
  const expected = `<link rel="canonical" href="https://spacefast.com/setup/${id}/">`;
  if (!html.includes(expected)) {
    throw new Error(`dist/${file} does not declare its www canonical (${expected}).`);
  }
}
// The `+1` is the home page, listed at the docs root rather than at its
// canonical origin.
if (indexedPages !== sitemapUrls.length + 1) {
  throw new Error(
    `Search/sitemap count mismatch: ${indexedPages} indexed, ${sitemapUrls.length} in sitemap.`,
  );
}
const robots = await readBuilt("robots.txt");
if (!robots.includes(`Sitemap: ${docsRoot}/sitemap.xml`)) {
  throw new Error("robots.txt does not advertise the docs sitemap.");
}

// Blume's generated changelog timeline is in the sitemap/search index, but the
// LLM corpus enumerates authored changelog entries (and packages) instead.
const generatedChangelogUrl = `${docsRoot}/changelog`;
const llmSitemapUrls = sitemapUrls.filter(
  (url) => url.replace(/\/$/u, "") !== generatedChangelogUrl,
);
if (!sitemapUrls.some((url) => url.replace(/\/$/u, "") === generatedChangelogUrl)) {
  throw new Error(
    `Sitemap is missing the generated changelog timeline at ${generatedChangelogUrl}`,
  );
}

// llms.txt is a curated index, not a mirror of the sitemap: the generated error
// pages, API operations, and per-release changelog entries are collapsed to
// their index pages by scripts/build-llms-index.mjs, because ~1,100 operation
// titles ahead of anything actionable is worse than useless to an agent. What
// survives is the authored route set plus the generated agent setup pages, and that is the
// invariant checked here. Only link targets count; the preamble's prose and
// code samples mention docs URLs that are illustrations, not entries.
const llmsIndex = await readBuilt("llms.txt");
const llmsPageUrls = llmsIndex
  .split("\n")
  .filter((line) => line.startsWith("- ["))
  .flatMap((line) => [...line.matchAll(/\]\((https:\/\/[^)]+)\)/gu)].map((match) => match[1]))
  .filter((url) => !url.endsWith("/rss.xml"));
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
if (
  sourceUrls.length !== llmSitemapUrls.length ||
  sourceUrls.some((url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot && url !== site)
) {
  throw new Error("llms-full.txt has missing or non-docs source URLs.");
}
const sitemapKeys = new Set(llmSitemapUrls.map(corpusKey));
if (
  sourceUrls.length !== llmSitemapUrls.length ||
  sourceUrls.some((url) => !sitemapKeys.has(corpusKey(url)))
) {
  throw new Error("llms-full.txt and sitemap.xml disagree on the public docs corpus.");
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
const compatibilityRules = compileRedirectRules(generatedRedirects);
const routingRules = buildRoutingRules(generatedRedirects);
const movedZeroRoute = resolveRedirect(`${deploymentBase}/zero`, routingRules);
if (
  movedZeroRoute.destination !== "/zero-runtime" ||
  movedZeroRoute.hops.length !== 2 ||
  movedZeroRoute.hops[0]?.destination !== `${deploymentBase}/zero-runtime` ||
  movedZeroRoute.hops[0]?.status !== 301 ||
  movedZeroRoute.hops[1]?.status !== 200
) {
  throw new Error("The former Zero docs route does not redirect through the Docs mount.");
}
const appsZeroRoute = resolveRedirect(`${deploymentBase}/apps/zero`, routingRules);
if (
  appsZeroRoute.destination !== "/zero-runtime" ||
  appsZeroRoute.hops.length !== 2 ||
  appsZeroRoute.hops[0]?.destination !== `${deploymentBase}/zero-runtime` ||
  appsZeroRoute.hops[0]?.status !== 301 ||
  appsZeroRoute.hops[1]?.status !== 200
) {
  throw new Error("The former apps/zero docs route does not redirect through the Docs mount.");
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
  const resolved = resolveRedirect(example.source, compatibilityRules);
  if (
    resolved.destination !== canonicalDestination ||
    resolved.hops.length < 1 ||
    resolved.hops.some(({ status }) => status !== redirect.status)
  ) {
    throw new Error(
      `Built routing rules do not preserve compatibility: ${example.source} -> ${example.destination}`,
    );
  }
}
const htmlFiles = await htmlFilesUnder(dist);
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
  `Route verification passed: all ${requiredIaRoutes.length} IA routes, ${htmlFiles.length} HTML pages, ${indexedPages} Pagefind records, ${sitemapUrls.length} sitemap/LLM/corpus pages, ${routingRules.length} routing rules covering ${generatedRedirects.length + referenceAliases.length} compatibility URLs, and every root-relative URL resolves.`,
);

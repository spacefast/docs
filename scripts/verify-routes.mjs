import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

import {
  buildRoutingRules,
  compileRedirectRules,
  deploymentBase,
  resolveRedirect,
} from "./redirect-rules.mjs";

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

function parseRequiredIaRoutes(source) {
  const routeSection = source.split(/^ROUTE POLICY$/mu, 1)[0];
  const routes = routeSection
    .split("\n")
    .map((line) => line.match(/^\s*(\/(?:[a-z0-9][a-z0-9_./-]*)?)(?:\s{2,}.*)?$/u)?.[1])
    .filter(Boolean);
  if (routes.length === 0 || new Set(routes).size !== routes.length) {
    throw new Error("proposed-ia.txt must contain a non-empty, duplicate-free route manifest.");
  }
  return routes;
}

function routesFromSidebar(source) {
  const start = source.indexOf("sidebar:");
  const end = source.indexOf("openapi:", start);
  if (start < 0 || end < 0) {
    throw new Error("Could not locate the sidebar in blume.config.ts.");
  }
  return new Set(
    [...source.slice(start, end).matchAll(/["'](\/[^"']*)["']/gu)].map((match) => match[1]),
  );
}

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
const [requiredIaRoutes, sidebarRoutes] = await Promise.all([
  readFile(path.join(root, "proposed-ia.txt"), "utf8").then(parseRequiredIaRoutes),
  readFile(path.join(root, "blume.config.ts"), "utf8").then(routesFromSidebar),
]);
const requiredIaRouteSet = new Set(requiredIaRoutes);
const missingFromSidebar = requiredIaRoutes.filter((route) => !sidebarRoutes.has(route));
const extraSidebarRoutes = [...sidebarRoutes].filter((route) => !requiredIaRouteSet.has(route));
if (missingFromSidebar.length > 0 || extraSidebarRoutes.length > 0) {
  throw new Error(
    `Sidebar and proposed-ia.txt disagree: missing [${missingFromSidebar.join(", ")}], extra [${extraSidebarRoutes.join(", ")}].`,
  );
}
const representativePages = [
  // Blume canonicalizes the home page to the bare site origin; every other
  // page carries the deployment base.
  ["index.html", site, "Spacefast documentation"],
  [
    "getting-started/quickstart/index.html",
    `${docsRoot}/getting-started/quickstart`,
    "Tell your agent",
  ],
  ["spaces/index.html", `${docsRoot}/spaces`, "What a space owns"],
  ["publishing/channels/index.html", `${docsRoot}/publishing/channels`, "The release boundary"],
  ["agents/mcp/index.html", `${docsRoot}/agents/mcp`, "Hosted vs on-device"],
  ["api/index.html", `${docsRoot}/api`, "The shape of every response"],
  ["api/reference/index.html", `${docsRoot}/api/reference`, "REST API"],
  ["cli/index.html", `${docsRoot}/cli`, "CLI reference"],
  ["errors/index.html", `${docsRoot}/errors`, "Error reference"],
  ["errors/rate_limited/index.html", `${docsRoot}/errors/rate_limited`, "rate_limited"],
  ["publishing/frameworks/vite/index.html", `${docsRoot}/publishing/frameworks/vite`, "Plain Vite"],
  [
    "publishing/migrate/vercel/index.html",
    `${docsRoot}/publishing/migrate/vercel`,
    "Static Next.js export",
  ],
  ["platforms/api/reference/index.html", `${docsRoot}/platforms/api/reference`, "Platform API"],
];
for (const page of representativePages) {
  await requirePage(...page);
}
for (const route of requiredIaRoutes) {
  await requirePage(localTargetFor(route), route === "/" ? site : `${docsRoot}${route}`);
}

const notFound = await readBuilt("404.html");
if (!notFound.includes("Page not found") || !notFound.includes(`href="${deploymentBase}"`)) {
  throw new Error("Built 404 does not link back to the docs site.");
}

for (const artifact of [
  "index.md",
  "index.mdx",
  "getting-started/quickstart.md",
  "getting-started/quickstart.mdx",
  "api/reference.md",
  "cli.md",
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
// The home page canonicalizes to the bare origin but is listed at the base.
const sitemapExpected = representativePages.map(([, canonical]) =>
  canonical === site ? docsRoot : canonical,
);
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

const llmsIndex = await readBuilt("llms.txt");
const llmsPageUrls = [...llmsIndex.matchAll(/https:\/\/spacefast\.com\/docs[^\s)>]*/gu)]
  .map((match) => match[0])
  .filter((url) => !url.endsWith("/rss.xml"));
if (
  llmsPageUrls.length !== llmSitemapUrls.length ||
  llmsPageUrls.some((url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot && url !== site)
) {
  throw new Error("llms.txt has missing or non-docs page URLs.");
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
const expectedRedirects = `${routingRules
  .map(({ from, status, to }) => `${from} ${to} ${status}`)
  .join("\n")}\n`;
if (
  !builtRedirects.startsWith("# Generated from generated/redirects.json. Do not edit.\n") ||
  builtRedirects !== `# Generated from generated/redirects.json. Do not edit.\n${expectedRedirects}`
) {
  throw new Error("Built redirects do not match the generated compatibility map.");
}
for (const redirect of generatedRedirects) {
  const example = representativeRedirect(redirect);
  const target = localTargetFor(example.destination);
  if (!(await exists(path.join(dist, target)))) {
    throw new Error(`Redirect destination is missing: ${example.source} -> ${example.destination}`);
  }
  const resolved = resolveRedirect(example.source, compatibilityRules);
  if (
    resolved.destination !== example.destination ||
    resolved.hops.length < 1 ||
    resolved.hops.some(({ status }) => status !== redirect.status)
  ) {
    throw new Error(
      `Built routing rules do not preserve compatibility: ${example.source} -> ${example.destination}`,
    );
  }
}
if (await exists(path.join(dist, "api/operations/index.html"))) {
  throw new Error("Compatibility redirects must not become indexed HTML pages.");
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
  `Route verification passed: all ${requiredIaRoutes.length} IA routes, ${htmlFiles.length} HTML pages, ${indexedPages} Pagefind records, ${sitemapUrls.length} sitemap/LLM/corpus pages, ${routingRules.length} routing rules covering ${generatedRedirects.length} compatibility URLs, and every root-relative URL resolves.`,
);

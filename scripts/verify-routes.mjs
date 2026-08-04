import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

import {
  compileRedirectRules,
  resolveRedirect,
} from "./redirect-rules.mjs";

const root = path.resolve(process.cwd());
const dist = path.join(root, "dist");
const deploymentBase = "/docs";
const site = "https://spacefast.com";
const docsRoot = `${site}${deploymentBase}`;
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
    throw new Error(
      `Wrong canonical in dist/${relativePath}: ${canonical ?? "missing"}`,
    );
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
  if (pathname === deploymentBase || pathname === `${deploymentBase}/`) {
    return "index.html";
  }
  const relative = pathname.slice(`${deploymentBase}/`.length);
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
    throw new Error(
      `Unsupported compatibility wildcard: ${redirect.from} -> ${redirect.to}`,
    );
  }
  return { source, destination };
}

if (!(await exists(dist))) {
  throw new Error("Missing dist/. Run `bun run build` first.");
}
if (await exists(path.join(dist, "docs"))) {
  throw new Error("deployment.base must not create a physical dist/docs tree");
}

const representativePages = [
  ["index.html", docsRoot, "Spacefast documentation"],
  ["quickstart/index.html", `${docsRoot}/quickstart`, "Common first publish"],
  ["api/index.html", `${docsRoot}/api`, "The shape of every response"],
  [
    "api/reference/index.html",
    `${docsRoot}/api/reference`,
    "REST API",
  ],
  [
    "api/reference/spaces/getv1spacesbyspaceidmounts/index.html",
    `${docsRoot}/api/reference/spaces/getv1spacesbyspaceidmounts`,
    "mount",
  ],
  ["cli/index.html", `${docsRoot}/cli`, "CLI reference"],
  ["errors/index.html", `${docsRoot}/errors`, "Error reference"],
  [
    "errors/rate_limited/index.html",
    `${docsRoot}/errors/rate_limited`,
    "rate_limited",
  ],
  [
    "integrations/vite/index.html",
    `${docsRoot}/integrations/vite`,
    "Vite",
  ],
  [
    "migrate-from/vercel/index.html",
    `${docsRoot}/migrate-from/vercel`,
    "Vercel",
  ],
];
for (const page of representativePages) {
  await requirePage(...page);
}

const platformReference = await readBuilt("platforms/api/reference/index.html");
if (
  canonicalFrom(platformReference) ||
  !/<meta\b[^>]*name=["']robots["'][^>]*content=["']noindex["'][^>]*>/iu.test(
    platformReference,
  ) ||
  !hasPagefindIgnore(platformReference) ||
  !platformReference.includes("Platform API")
) {
  throw new Error(
    "Platform API reference must render but stay noindex, non-canonical, and excluded from Pagefind.",
  );
}

const notFound = await readBuilt("404.html");
if (!notFound.includes("Page not found") || !notFound.includes('href="/docs"')) {
  throw new Error("Built 404 does not stay inside the docs mount.");
}

for (const artifact of [
  "index.md",
  "index.mdx",
  "quickstart.md",
  "quickstart.mdx",
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
  "spacefast.jsonc",
]) {
  await requireFile(artifact);
}

for (const serverArtifact of [
  "api/ask",
  "api/ask/index.html",
  "api/search",
  "api/search/index.html",
  "mcp",
  "mcp/index.html",
  ".well-known/mcp.json",
  ".well-known/mcp/server-card.json",
  "blume-search.json",
]) {
  if (await exists(path.join(dist, serverArtifact))) {
    throw new Error(`Static build unexpectedly emitted dist/${serverArtifact}`);
  }
}

const pagefindEntry = JSON.parse(
  await readBuilt("pagefind/pagefind-entry.json"),
);
const indexedPages = Object.values(pagefindEntry.languages ?? {}).reduce(
  (total, language) => total + (language.page_count ?? 0),
  0,
);
if (indexedPages < 820) {
  throw new Error(`Pagefind indexed only ${indexedPages} pages.`);
}

const sitemap = await readBuilt("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map(
  (match) => match[1],
);
for (const expected of representativePages.map(([, canonical]) => canonical)) {
  if (!sitemapUrls.includes(expected)) {
    throw new Error(`Sitemap is missing ${expected}`);
  }
}
if (
  sitemapUrls.some((url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot)
) {
  throw new Error("Sitemap contains a URL outside the /docs deployment base.");
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
  throw new Error("robots.txt does not advertise the docs-scoped sitemap.");
}

const llmsIndex = await readBuilt("llms.txt");
const llmsPageUrls = [
  ...llmsIndex.matchAll(/https:\/\/spacefast\.com\/docs[^\s)>]*/gu),
].map((match) => match[0]);
if (
  llmsPageUrls.length !== sitemapUrls.length ||
  llmsPageUrls.some(
    (url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot,
  )
) {
  throw new Error("llms.txt has missing or non-docs-scoped page URLs.");
}

const llmsFull = await readBuilt("llms-full.txt");
const sourceUrls = [...llmsFull.matchAll(/^Source: (https:\/\/[^\s]+)$/gmu)].map(
  (match) => match[1],
);
if (
  sourceUrls.length !== sitemapUrls.length ||
  sourceUrls.some(
    (url) => !url.startsWith(`${docsRoot}/`) && url !== docsRoot,
  )
) {
  throw new Error("llms-full.txt has missing or non-docs-scoped source URLs.");
}
if (
  sourceUrls.length !== sitemapUrls.length ||
  sourceUrls.some((url) => !sitemapUrls.includes(url))
) {
  throw new Error("llms-full.txt and sitemap.xml disagree on the public docs corpus.");
}

const corpus = JSON.parse(await readBuilt("docs-corpus.json"));
if (
  corpus.schemaVersion !== 1 ||
  typeof corpus.revision !== "string" ||
  corpus.revision.length < 7 ||
  corpus.pages.length !== sourceUrls.length ||
  corpus.pages.some(
    (page) =>
      !sourceUrls.includes(page.url) ||
      page.path === "/platforms" ||
      page.path.startsWith("/platforms/"),
  )
) {
  throw new Error("docs-corpus.json does not match the public, platform-free LLM corpus.");
}

const readability = JSON.parse(await readBuilt("agent-readability.json"));
for (const value of Object.values(readability.artifacts)) {
  if (
    typeof value === "string" &&
    value.startsWith(site) &&
    !value.startsWith(docsRoot)
  ) {
    throw new Error("agent-readability.json advertises an artifact outside /docs.");
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
  staticConfig.$schema !== `${site}/schemas/sf.json` ||
  staticConfig.cleanUrls !== true ||
  staticConfig.fallback?.path !== "404.html" ||
  staticConfig.fallback?.status !== 404
) {
  throw new Error(
    "dist/spacefast.jsonc does not carry the mounted static serving contract.",
  );
}

const [generatedRedirects, builtRedirects] = await Promise.all([
  readFile(path.join(root, "generated/redirects.json"), "utf8").then(JSON.parse),
  readBuilt("_redirects"),
]);
const compatibilityRules = compileRedirectRules(generatedRedirects);
const directHostingRules = [
  { from: "/docs", status: 200, to: "/" },
  { from: "/docs/*", status: 200, to: "/:splat" },
];
const routingRules = [...compatibilityRules, ...directHostingRules];
const expectedRedirects = `${routingRules
  .map(({ from, status, to }) => `${from} ${to} ${status}`)
  .join("\n")}\n`;
if (
  !builtRedirects.startsWith(
    "# Generated from generated/redirects.json. Do not edit.\n",
  ) ||
  !builtRedirects.endsWith(expectedRedirects)
) {
  throw new Error("Built redirects do not match the generated compatibility map.");
}
for (const redirect of generatedRedirects) {
  if (
    redirect.from === deploymentBase ||
    redirect.from.startsWith(`${deploymentBase}/`) ||
    redirect.to === deploymentBase ||
    redirect.to.startsWith(`${deploymentBase}/`)
  ) {
    throw new Error("Mounted redirect rules must use target-space logical paths.");
  }
  const example = representativeRedirect(redirect);
  const target = localTargetFor(`${deploymentBase}${example.destination}`);
  if (!(await exists(path.join(dist, target)))) {
    throw new Error(
      `Redirect destination is missing: ${example.source} -> ${example.destination}`,
    );
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
    if (url !== deploymentBase && !url.startsWith(`${deploymentBase}/`)) {
      throw new Error(`Root-relative URL escapes /docs in dist/${file}: ${url}`);
    }
    const target = localTargetFor(url);
    if (!(await exists(path.join(dist, target)))) {
      throw new Error(`Broken built URL in dist/${file}: ${url} -> dist/${target}`);
    }
  }
}

console.log(
  `Route verification passed: ${htmlFiles.length} HTML pages, ${indexedPages} Pagefind records with platform pages ignored, ${sitemapUrls.length} public sitemap/LLM/corpus pages, ${routingRules.length} routing rules covering ${generatedRedirects.length} compatibility URLs, and every root-relative URL scoped to ${deploymentBase}.`,
);

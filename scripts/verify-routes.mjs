import { access, readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");
const deploymentBase = "/docs";
const site = "https://spacefast.com";
const docsRoot = `${site}${deploymentBase}`;
const checks = [];

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const requireFile = async (relativePath) => {
  const path = resolve(dist, relativePath);
  const details = await stat(path).catch(() => null);
  if (!details?.isFile()) {
    throw new Error(`Missing built file: dist/${relativePath}`);
  }
  checks.push(`dist/${relativePath}`);
  return path;
};

const requireAbsent = async (relativePath) => {
  if (await exists(resolve(dist, relativePath))) {
    throw new Error(`Unexpected server or basePath output: dist/${relativePath}`);
  }
};

const readBuilt = async (relativePath) =>
  readFile(await requireFile(relativePath), "utf-8");

const attribute = (tag, name) => {
  const match = tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "iu"));
  return match?.[1];
};

const canonicalFrom = (html) => {
  for (const match of html.matchAll(/<link\b[^>]*>/giu)) {
    if (attribute(match[0], "rel") === "canonical") {
      return attribute(match[0], "href");
    }
  }
  return undefined;
};

const requirePage = async (relativePath, expectedCanonical) => {
  const html = await readBuilt(relativePath);
  const canonical = canonicalFrom(html)?.replace(/\/$/u, "");
  if (canonical !== expectedCanonical.replace(/\/$/u, "")) {
    throw new Error(
      `Wrong canonical in dist/${relativePath}: ${canonical ?? "missing"}`
    );
  }
  if (!/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/iu.test(html)) {
    throw new Error(`Missing structured data in dist/${relativePath}`);
  }
};

const collectUrls = (value, output = []) => {
  if (typeof value === "string") {
    if (value.startsWith("http://") || value.startsWith("https://")) {
      output.push(value);
    }
    return output;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      collectUrls(item, output);
    }
    return output;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) {
      collectUrls(item, output);
    }
  }
  return output;
};

if (!(await exists(dist))) {
  throw new Error("Missing dist/. Run `bun run build` first.");
}

// Astro's deployment.base changes the served URL, not the physical output root.
await requireAbsent("docs");
await requirePage("index.html", docsRoot);
const overviewHtml = await readBuilt("index.html");
if (!overviewHtml.includes('href="/docs/quickstart"')) {
  throw new Error("Overview does not link to the docs-scoped quickstart route.");
}
await requirePage("quickstart/index.html", `${docsRoot}/quickstart`);
await requirePage("changelog/index.html", `${docsRoot}/changelog`);
await requirePage(
  "changelog/initial-docs/index.html",
  `${docsRoot}/changelog/initial-docs`
);

for (const path of [
  "404.html",
  "index.md",
  "index.mdx",
  "quickstart.md",
  "quickstart.mdx",
  "llms.txt",
  "llms-full.txt",
  "sitemap.xml",
  "robots.txt",
  "agent-readability.json",
  "changelog/rss.xml",
  "pagefind/pagefind.js",
  "pagefind/pagefind-entry.json",
  "sf.jsonc",
]) {
  await requireFile(path);
}

const pagefindEntry = JSON.parse(await readBuilt("pagefind/pagefind-entry.json"));
const indexedPages = Object.values(pagefindEntry.languages ?? {}).reduce(
  (total, language) => total + (language.page_count ?? 0),
  0
);
if (indexedPages !== 5) {
  throw new Error(`Expected Pagefind to index 5 built pages, got ${indexedPages}.`);
}

for (const path of [
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
  await requireAbsent(path);
}

const sitemap = await readBuilt("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gu)].map(
  (match) => match[1]
);
for (const expected of [docsRoot, `${docsRoot}/quickstart`, `${docsRoot}/changelog`]) {
  if (!sitemapUrls.some((url) => url.replace(/\/$/u, "") === expected)) {
    throw new Error(`Sitemap is missing ${expected}`);
  }
}
if (sitemapUrls.some((url) => !url.startsWith(`${docsRoot}`))) {
  throw new Error("Sitemap contains a URL outside the /docs deployment base.");
}

const robots = await readBuilt("robots.txt");
if (!robots.includes(`Sitemap: ${docsRoot}/sitemap.xml`)) {
  throw new Error("robots.txt does not advertise the docs-scoped sitemap.");
}

const llmsIndex = await readBuilt("llms.txt");
const indexedUrls = [
  ...llmsIndex.matchAll(/https:\/\/spacefast\.com[^\s)>]*/gu),
].map((match) => match[0]);
if (
  indexedUrls.length === 0 ||
  indexedUrls.some((url) => !url.startsWith(docsRoot))
) {
  throw new Error("llms.txt has missing or non-docs-scoped page URLs.");
}

const llmsFull = await readBuilt("llms-full.txt");
const sourceUrls = [...llmsFull.matchAll(/^Source: (https:\/\/[^\s]+)$/gmu)].map(
  (match) => match[1]
);
if (sourceUrls.length !== 3 || sourceUrls.some((url) => !url.startsWith(docsRoot))) {
  throw new Error("llms-full.txt has missing or non-docs-scoped source URLs.");
}

const readability = JSON.parse(await readBuilt("agent-readability.json"));
const readabilityUrls = collectUrls(readability.artifacts);
if (
  readabilityUrls.length === 0 ||
  readabilityUrls.some((url) => !url.startsWith(docsRoot))
) {
  throw new Error("agent-readability.json advertises an artifact outside /docs.");
}
if ("askApi" in readability.artifacts || "mcp" in readability.artifacts) {
  throw new Error("agent-readability.json advertises a disabled server feature.");
}
if (
  !Array.isArray(readability.artifacts.feeds) ||
  !readability.artifacts.feeds.includes(`${docsRoot}/changelog/rss.xml`)
) {
  throw new Error("agent-readability.json is missing changelog RSS.");
}

const rss = await readBuilt("changelog/rss.xml");
if (!rss.includes(`${docsRoot}/changelog/initial-docs`)) {
  throw new Error("Changelog RSS is missing the initial documentation entry.");
}

const staticConfig = JSON.parse(await readBuilt("sf.jsonc"));
if (staticConfig.$schema !== `${site}/schemas/sf.json`) {
  throw new Error("dist/sf.jsonc does not use the current Spacefast schema.");
}

console.log(
  `Route verification passed: ${checks.length} built route and artifact checks under ${deploymentBase}.`
);

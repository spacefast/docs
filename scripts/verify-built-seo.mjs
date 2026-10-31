import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { duplicateOperations } from "./api-ownership.mjs";

export async function verifyBuiltSeo(dist = path.resolve("dist")) {
  const files = (await readdir(dist, { recursive: true, withFileTypes: true })).filter((entry) => entry.isFile()).map((entry) => path.relative(dist, path.join(entry.parentPath, entry.name)));
  const pages = files.filter((file) => file.endsWith("index.html") && !file.startsWith("blume-nav/"));
  const root = "https://spacefast.com/docs/";
  const served = new Set(pages.map((file) => `${root}${file.replace(/index\.html$/u, "")}`));
  const sitemap = [...(await readFile(path.join(dist, "sitemap.xml"), "utf8")).matchAll(/<loc>([^<]+)<\/loc>/gu)].map((match) => match[1]);
  const api = JSON.parse(await readFile("generated/openapi/api.json", "utf8"));
  const partner = JSON.parse(await readFile("generated/openapi/partner.json", "utf8"));
  const duplicates = duplicateOperations(api, partner);
  const canonicalUrls = new Set();
  for (const file of pages) {
    const html = await readFile(path.join(dist, file), "utf8");
    const own = `${root}${file.replace(/index\.html$/u, "")}`;
    const canonical = /<link rel="canonical" href="([^"]+)"/u.exec(html)?.[1];
    if (!canonical || !served.has(canonical)) throw new Error(`Canonical is not a final served URL: ${file}: ${canonical}`);
    canonicalUrls.add(canonical);
    if (canonical !== own && !(file.startsWith("platforms/api/reference/") && duplicates.has(file.split("/").at(-2)))) throw new Error(`Unexplained cross-canonical: ${file}`);
    if (/<meta[^>]*name="robots"[^>]*content="[^"]*noindex|http-equiv="refresh"/u.test(html)) throw new Error(`Non-indexable content: ${file}`);
    for (const [, href] of html.matchAll(/\bhref="([^"]+)"/gu)) {
      const url = new URL(href.replaceAll("&amp;", "&"), own);
      if (url.origin !== "https://spacefast.com" || !url.pathname.startsWith("/docs")) continue;
      const slash = `${url.origin}${url.pathname.replace(/\/$/u, "")}/`;
      if (served.has(slash) && !url.pathname.endsWith("/")) throw new Error(`Slashless page link in ${file}: ${href}`);
      if (url.pathname.includes("/.well-known/")) throw new Error(`Forbidden nested discovery path in ${file}: ${href}`);
    }
    const client = /<script[^>]*id="blume-client-data"[^>]*>([\s\S]*?)<\/script>/u.exec(html)?.[1];
    if (client && ("navigation" in JSON.parse(client) || Buffer.byteLength(client) > 32_768)) throw new Error(`Navigation is inlined in ${file}`);
    const preloads = [...html.matchAll(/<link[^>]*rel="preload"[^>]*href="([^"]+\.woff2)"[^>]*>/gu)].map((match) => match[1]);
    const faces = [...html.matchAll(/@font-face\{[^}]+\}/gu)].map((match) => match[0]);
    if (preloads.length !== 2 || preloads.some((url) => !faces.some((face) => face.includes(url) && /unicode-range:U\+0*0-0*FF[,;]/iu.test(face)))) throw new Error(`English pages must preload only Latin fonts: ${file}`);
    const visible = /<nav aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/u.exec(html)?.[1];
    const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu)].flatMap(([, json]) => { const parsed = JSON.parse(json); return parsed["@graph"] ?? [parsed]; });
    const crumbs = graphs.filter((item) => item["@type"] === "BreadcrumbList");
    if (!visible || crumbs.length !== 1) throw new Error(`Missing or duplicate breadcrumbs: ${file}`);
    const count = [...visible.matchAll(/<li[\s>]/gu)].length;
    if (crumbs[0].itemListElement.length !== count || crumbs[0].itemListElement.at(-1)?.item !== own) throw new Error(`Breadcrumbs disagree in ${file}`);

  }
  if (sitemap.some((url) => !url.endsWith("/") || !canonicalUrls.has(url))) throw new Error("Sitemap advertises a redirect or non-owner URL");
  if (canonicalUrls.size !== sitemap.length) throw new Error(`Sitemap misses canonical pages: ${canonicalUrls.size} owners, ${sitemap.length} entries`);
  const nav = JSON.parse(await readFile(path.join(dist, "navigation.json"), "utf8"));
  if (!Array.isArray(nav.sidebar) || nav.sidebar.length === 0) throw new Error("Shared navigation is empty");
  for (const file of ["ard.json", "ai-catalog.json", "api-catalog.json"]) {
    const json = JSON.parse(await readFile(path.join(dist, file), "utf8"));
    if (!json || !Object.keys(json).length) throw new Error(`Empty agent catalog: ${file}`);
  }
  console.log(`SEO verification passed: ${pages.length} pages, final canonicals and links, ${sitemap.length} canonical owners, matching breadcrumbs, public catalogs, and shared navigation.`);
}

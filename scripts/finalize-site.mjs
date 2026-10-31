import { readFile, readdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { duplicateOperations } from "./api-ownership.mjs";

import { redirects } from "../redirects.ts";
import { compileRedirectRules, resolveRedirect } from "./redirect-rules.mjs";
import { docsUrlPattern } from "./docs-urls.mjs";

const dist = path.resolve("dist");
const origin = "https://spacefast.com";
const base = "/docs";
const listFiles = async () => (await readdir(dist, { recursive: true, withFileTypes: true })).filter((entry) => entry.isFile()).map((entry) => path.relative(dist, path.join(entry.parentPath, entry.name)));
let files = await listFiles();
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const pages = new Set(htmlFiles.filter((file) => file.endsWith("index.html")).map((file) => `${base}/${file.replace(/index\.html$/u, "")}`));
const compatibility = JSON.parse(await readFile("generated/redirects.json", "utf8"));
const rules = [...redirects, ...compileRedirectRules(compatibility)];
const catalogs = new Map([
  [`${base}/.well-known/ard.json`, `${base}/ard.json`],
  [`${base}/.well-known/ai-catalog.json`, `${base}/ai-catalog.json`],
  [`${base}/.well-known/api-catalog`, `${base}/api-catalog.json`],
]);
for (const [from, to] of catalogs) await writeFile(path.join(dist, to.slice(base.length)), await readFile(path.join(dist, from.slice(base.length))).catch(() => readFile(path.join(dist, to.slice(base.length)))));
await rm(path.join(dist, ".well-known"), { recursive: true, force: true });
// The platform reads _redirects. Blume's manifests for other hosts would only
// be rewritten into stale, self-referencing entries here.
for (const file of ["blume-redirects.json", "vercel.json"]) await rm(path.join(dist, file), { force: true });
// Include the catalogs just moved out of .well-known in URL normalization.
files = await listFiles();
const finalUrl = (value) => {
  const absolute = value.startsWith(origin);
  const local = absolute ? value.slice(origin.length) : value;
  if (local !== base && !local.startsWith(`${base}/`) && !local.startsWith(`${base}?`) && !local.startsWith(`${base}#`)) return value;
  const [, pathname, suffix = ""] = /^(.*?)([?#].*)?$/u.exec(local);
  if (catalogs.has(pathname)) return `${absolute ? origin : ""}${catalogs.get(pathname)}${suffix}`;
  const route = pathname.slice(base.length).replace(/\/$/u, "") || "/";
  const destination = resolveRedirect(route, rules).destination;
  const [target, fragment = ""] = destination.split(/(?=#)/u);
  const served = `${base}${target === "/" ? "/" : `${target.replace(/\/$/u, "")}/`}`;
  return pages.has(served) ? `${absolute ? origin : ""}${served}${fragment || suffix}` : value;
};
const urlCache = new Map();
const cachedUrl = (value) => {
  if (!urlCache.has(value)) urlCache.set(value, finalUrl(value));
  return urlCache.get(value);
};
const rewrite = (text) => text.replace(docsUrlPattern, cachedUrl);
const unescape = (text) => text.replace(/<[^>]+>/gu, "").replaceAll("&amp;", "&").replaceAll("&#39;", "'").replaceAll("&quot;", '"').trim();
const manifest = JSON.parse(await readFile(".blume/blume.manifest.json", "utf8"));
const api = JSON.parse(await readFile("generated/openapi/api.json", "utf8"));
const partner = JSON.parse(await readFile("generated/openapi/partner.json", "utf8"));
const duplicates = duplicateOperations(api, partner);
const owned = new Map(manifest.routes.filter((route) => route.path.startsWith("/api/reference/")).map((route) => [route.path.split("/").at(-1), route.path]));
const duplicateUrls = new Map(manifest.routes.filter((route) => route.path.startsWith("/platforms/api/reference/") && duplicates.has(route.path.split("/").at(-1)) && owned.has(route.path.split("/").at(-1))).map((route) => [`${origin}${base}${route.path}/`, `${origin}${base}${owned.get(route.path.split("/").at(-1))}/`]));
let navigation;
let redirectsRemoved = 0;
for (const file of files) {
  if (!/\.(?:html|json|xml|txt|md|mdx)$/u.test(file)) continue;
  const filename = path.join(dist, file);
  let text = await readFile(filename, "utf8");
  if (file.endsWith(".html")) {
    if (/<meta\s+http-equiv="refresh"/u.test(text)) {
      await rm(filename);
      redirectsRemoved += 1;
      continue;
    }
    text = text.replace(/(<script[^>]*id="blume-client-data"[^>]*>)([\s\S]*?)(<\/script>)/u, (_, start, json, end) => {
      const data = JSON.parse(json);
      navigation ??= data.navigation;
      delete data.navigation;
      return `${start}${JSON.stringify(data).replaceAll("<", "\\u003c")}${end}`;
    });
    // Replace Blume's partial breadcrumb graph with the same linked trail people see.
    text = text.replace(/(<script[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gu, (_, start, json, end) => {
      const graph = JSON.parse(json);
      if (graph["@graph"]) graph["@graph"] = graph["@graph"].filter((item) => item["@type"] !== "BreadcrumbList");
      return graph["@type"] === "BreadcrumbList" ? "" : `${start}${JSON.stringify(graph).replaceAll("<", "\\u003c")}${end}`;
    });
    const visible = /<nav aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/u.exec(text)?.[1];
    if (visible) {
      const current = `${origin}${base}/${file.replace(/index\.html$/u, "")}`;
      const items = [...visible.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gu)].map(([, body], index) => ({
        "@type": "ListItem", position: index + 1,
        name: unescape(body.replace(/<span aria-hidden="true">[\s\S]*?<\/span>/u, "")),
        item: finalUrl(/href="([^"]+)"/u.exec(body)?.[1] ? `${origin}${/href="([^"]+)"/u.exec(body)[1]}` : current),
      }));
      const graph = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
      text = text.replace("</head>", `<script type="application/ld+json">${JSON.stringify(graph).replaceAll("<", "\\u003c")}</script></head>`);
    }
  }
  text = rewrite(text);
  if (file.endsWith(".html")) {
    const own = `${origin}${base}/${file.replace(/index\.html$/u, "")}`;
    if (duplicateUrls.has(own)) text = text.replace(/(<link rel="canonical" href=")[^"]+("[^>]*>)/u, `$1${duplicateUrls.get(own)}$2`);
    if (file.startsWith("platforms/api/reference/")) text = text.replace(/(<title>)(.*?)( - Spacefast Docs<\/title>)/u, "$1$2 — Partner API$3");
    else if (file.startsWith("api/reference/")) text = text.replace(/(<title>)(.*?)( - Spacefast Docs<\/title>)/u, "$1$2 — REST API$3");
  }
  if (file === "sitemap.xml") text = text.replace(/<url>[\s\S]*?<\/url>/gu, (entry) => [...duplicateUrls.keys()].some((url) => entry.includes(`<loc>${url}</loc>`)) ? "" : entry);
  await writeFile(filename, text);
}
if (navigation) await writeFile(path.join(dist, "navigation.json"), rewrite(JSON.stringify(navigation)));
console.log(`Finalized trailing-slash links, public agent catalogs, shared navigation, and breadcrumbs; canonicalized ${duplicateUrls.size} identical Partner contracts; removed ${redirectsRemoved} HTML redirect documents.`);

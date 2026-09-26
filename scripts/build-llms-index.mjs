// Rewrites dist/llms.txt into a curated index. Blume generates the file from
// the sidebar tree and dumps every page the sidebar does not reach into a
// trailing "## Other" bucket, which is where the generated error pages, API
// operations, and per-release changelog entries land. That bucket is over 90%
// of the file, so an agent fetching llms.txt to orient itself pays for ~1,100
// operation titles before reaching anything it can act on.
//
// This drops those entries. It never authors prose: titles and descriptions
// stay Blume's (which reads them from page frontmatter), and Blume places the
// agent guidance from content/_llms-preamble.md through `agents.llmsTxt.details`.
//
// llms-full.txt is deliberately untouched. scripts/build-docs-corpus.mjs parses
// it into dist/docs-corpus.json, which backs the docs search and ask endpoints;
// cutting pages from it cuts what those endpoints can answer.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { deploymentBase } from "./redirect-rules.mjs";
import { readSidebarRoutes } from "./sidebar-routes.mjs";

const SITE = "https://spacefast.com";
const DOCS_ROOT = `${SITE}${deploymentBase}`;

// Prefixes generated one page per error code, API operation, or release.
// A root stays in the index only when the authored navigation includes it.
//
// The rule keys on route, never on heading. Blume decides a page's section by
// walking the sidebar, so moving these under a named section instead of
// "## Other" would defeat any heading-based filter. Route is the stable signal.
const COLLAPSED_ROOTS = [
  "/errors",
  "/api/reference",
  "/partners/api/reference",
  "/changelog",
];

// The one route family that belongs in the index but is not a sidebar route:
// the generated per-agent setup pages.
const ALLOWED_NON_SIDEBAR_PREFIX = "/setup";

// Blume's agent discovery endpoints belong in the index alongside page links.
const DISCOVERY_ROUTES = new Set([
  "/llms-full.txt",
  "/index.md",
  "/api/docs/pages.json",
  "/.well-known/api-catalog",
  "/.well-known/ai-catalog.json",
  "/agent-readability.json",
]);
export const isDiscoveryResource = (route) => route.endsWith(".xml") || DISCOVERY_ROUTES.has(route);

export function discoveryFileForUrl(url) {
  if (!url.startsWith(`${DOCS_ROOT}/`)) return undefined;
  const route = url.slice(DOCS_ROOT.length);
  if (!isDiscoveryResource(route)) return undefined;
  if (
    new URL(url).href !== url ||
    route.includes("\\") ||
    route.slice(1).split("/").some((segment) => !segment || [".", ".."].includes(decodeURIComponent(segment)))
  ) {
    throw new Error(`Non-canonical discovery URL: ${url}`);
  }
  return route.slice(1);
}


const MAX_BYTES = 32 * 1024;

const isEntry = (line) => line.startsWith("- [");
const isHeading = (line) => line.startsWith("## ");
const headingLevel = (line) => /^(#{2,6}) /u.exec(line)?.[1].length;

// Blume nests a reference's tag groups as sub-headings. Once their operations
// collapse, drop every heading that no longer owns any content.
function pruneEmptyHeadings(lines) {
  return lines.filter((line, index) => {
    const level = headingLevel(line);
    if (level === undefined) return true;
    for (const next of lines.slice(index + 1)) {
      const nextLevel = headingLevel(next);
      if (nextLevel !== undefined) {
        if (nextLevel <= level) return false;
        continue;
      }
      if (next.trim() !== "") return true;
    }
    return false;
  });
}

/** The docs-relative route a link line points at, or undefined for a non-link. */
export function routeOf(line) {
  const match = line.match(
    new RegExp(`\\]\\(${DOCS_ROOT.replaceAll(".", "\\.")}([^)]*)\\)`, "u"),
  );
  if (!match) return undefined;
  return match[1] === "" ? "/" : match[1];
}

export function buildLlmsIndex({ source, sidebarRoutes }) {
  const lines = source.split("\n");
  const entries = lines.filter(isEntry);
  if (entries.length === 0 || !lines.some(isHeading)) {
    throw new Error(
      "dist/llms.txt has no headings or no link entries. Blume's output format changed; " +
        "re-read node_modules/blume/src/ai/llms.ts before adjusting this script.",
    );
  }

  // Feed URLs (the RSS section) are not pages and are never collapsed.
  const shouldDrop = (line) => {
    const route = routeOf(line);
    if (!route || isDiscoveryResource(route)) return false;
    if (sidebarRoutes.has(route)) return false;
    return COLLAPSED_ROOTS.some((root) => route === root || route.startsWith(`${root}/`));
  };

  const kept = [];
  let dropped = 0;
  for (const line of lines) {
    if (isEntry(line) && shouldDrop(line)) {
      dropped += 1;
      continue;
    }
    kept.push(line);
  }
  if (dropped === 0) {
    throw new Error(
      "No entries were collapsed. Either dist/llms.txt was already rewritten (this script " +
        "is not idempotent by design) or the generated routes moved.",
    );
  }

  // "## Other" is where the leftovers land. Once the generated families are
  // gone, only the agent setup pages remain there, so the label says so.
  const sections = [];
  for (const line of kept) {
    if (isHeading(line)) {
      sections.push({ heading: line, body: [] });
      continue;
    }
    if (sections.length === 0) {
      sections.push({ heading: undefined, body: [line] });
      continue;
    }
    sections.at(-1).body.push(line);
  }

  const rendered = [];
  for (const section of sections) {
    const sectionEntries = section.body.filter(isEntry);
    if (section.heading === "## Other") {
      const strays = sectionEntries.filter((line) => {
        const route = routeOf(line);
        if (!route) return false;
        return !isDiscoveryResource(route) && !sidebarRoutes.has(route) && !route.startsWith(ALLOWED_NON_SIDEBAR_PREFIX);
      });
      if (strays.length > 0) {
        throw new Error(
          `A generated route family the sidebar does not reach appeared in "## Other": ` +
            `${strays
              .map(routeOf)
              .slice(0, 5)
              .join(", ")}. Decide whether it belongs in llms.txt, then either add it to ` +
            "the sidebar or collapse it in COLLAPSED_ROOTS.",
        );
      }
      rendered.push("## Agent setup", ...section.body);
      continue;
    }
    if (section.heading) rendered.push(section.heading);
    rendered.push(...section.body);
  }

  const result = pruneEmptyHeadings(rendered)
    .join("\n")
    .replaceAll(/\n{3,}/gu, "\n\n")
    .replace(/\n*$/u, "\n");
  if (!result.includes("\n## ")) throw new Error("No sections survived the rewrite.");

  // Every surviving entry is a sidebar route or an agent setup page. Nothing
  // else belongs in this file, and asserting it here means a future generated
  // family fails the build instead of quietly refilling the bucket.
  const survivors = result.split("\n").filter(isEntry).map(routeOf);
  const unexpected = survivors.filter(
    (route) =>
      route &&
      !isDiscoveryResource(route) &&
      !sidebarRoutes.has(route) &&
      !route.startsWith(ALLOWED_NON_SIDEBAR_PREFIX),
  );
  if (unexpected.length > 0) {
    throw new Error(
      `llms.txt would list routes that are neither in the sidebar nor under ` +
        `${ALLOWED_NON_SIDEBAR_PREFIX}: ${unexpected.slice(0, 5).join(", ")}`,
    );
  }

  const bytes = Buffer.byteLength(result, "utf8");
  if (bytes > MAX_BYTES) {
    throw new Error(
      `llms.txt is ${bytes} bytes, over the ${MAX_BYTES}-byte ceiling. This file is an ` +
        "index for agents, not a mirror of the sitemap.",
    );
  }

  return { dropped, kept: survivors.length, bytes, text: result };
}

export async function curateLlmsIndex(root = process.cwd()) {
  const target = path.join(root, "dist", "llms.txt");
  const [source, sidebarRoutes] = await Promise.all([
    readFile(target, "utf8"),
    readSidebarRoutes(root),
  ]);
  const result = buildLlmsIndex({ source, sidebarRoutes });
  await writeFile(target, result.text);
  return result;
}

const scriptPath = fileURLToPath(import.meta.url);
const isMain =
  process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  const { dropped, kept, bytes } = await curateLlmsIndex(path.resolve(scriptPath, "../.."));
  process.stdout.write(
    `Curated llms.txt: collapsed ${dropped} generated pages, kept ${kept} entries, ${bytes} bytes.\n`,
  );
}

// Rewrites dist/llms.txt into a curated index. Blume generates the file from
// the sidebar tree and dumps every page the sidebar does not reach into a
// trailing "## Other" bucket, which is where the generated error pages, API
// operations, and per-release changelog entries land. That bucket is over 90%
// of the file, so an agent fetching llms.txt to orient itself pays for ~1,100
// operation titles before reaching anything it can act on.
//
// This drops those entries and splices in a header. It never authors prose:
// titles and descriptions stay Blume's (which reads them from page
// frontmatter) and the header comes from content/_llms-preamble.md, so nothing
// here can drift as pages are added or retitled.
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
  "/platforms/api/reference",
  "/partners/api/reference",
  "/changelog",
];

// The one route family that belongs in the index but is not a sidebar route:
// the generated per-agent setup pages.
const ALLOWED_NON_SIDEBAR_PREFIX = "/setup";

const MAX_BYTES = 32 * 1024;

const isEntry = (line) => line.startsWith("- [");
const isHeading = (line) => line.startsWith("## ");

/** The docs-relative route a link line points at, or undefined for a non-link. */
export function routeOf(line) {
  const match = line.match(
    new RegExp(`\\]\\(${DOCS_ROOT.replaceAll(".", "\\.")}([^)]*)\\)`, "u"),
  );
  if (!match) return undefined;
  return match[1] === "" ? "/" : match[1];
}

/** Strip a leading YAML frontmatter block, if the file carries one. */
function stripFrontmatter(source) {
  if (!source.startsWith("---\n")) return source;
  const end = source.indexOf("\n---\n", 4);
  if (end < 0) throw new Error("The preamble opens a frontmatter block it never closes.");
  return source.slice(end + 5);
}

export function buildLlmsIndex({ source, preamble, sidebarRoutes }) {
  const lines = source.split("\n");
  const entries = lines.filter(isEntry);
  if (entries.length === 0 || !lines.some(isHeading)) {
    throw new Error(
      "dist/llms.txt has no headings or no link entries. Blume's output format changed; " +
        "re-read node_modules/blume/src/ai/llms.ts before adjusting this script.",
    );
  }

  const trimmed = preamble.trim();
  if (trimmed.length === 0) {
    throw new Error("content/_llms-preamble.md is empty.");
  }

  // Feed URLs (the RSS section) are not pages and are never collapsed.
  const shouldDrop = (line) => {
    const route = routeOf(line);
    if (!route || route.endsWith(".xml")) return false;
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

  // A heading whose entries all collapsed emits nothing. "## Other" is where
  // the leftovers land, so once the generated families are gone the agent
  // setup pages are all that remain there and the label should say so.
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
    if (section.heading && sectionEntries.length === 0) continue;
    if (section.heading === "## Other") {
      const strays = sectionEntries.filter((line) => {
        const route = routeOf(line);
        if (!route) return false;
        return !sidebarRoutes.has(route) && !route.startsWith(ALLOWED_NON_SIDEBAR_PREFIX);
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

  // The header is the title line and the blockquote summary; the preamble goes
  // after it, before the first section.
  const out = rendered.join("\n");
  const firstHeading = out.indexOf("\n## ");
  if (firstHeading < 0) throw new Error("No sections survived the rewrite.");
  const result = `${out.slice(0, firstHeading).trim()}\n\n${trimmed}\n${out.slice(firstHeading)}`
    .replaceAll(/\n{3,}/gu, "\n\n")
    .replace(/\n*$/u, "\n");

  // Every surviving entry is a sidebar route or an agent setup page. Nothing
  // else belongs in this file, and asserting it here means a future generated
  // family fails the build instead of quietly refilling the bucket.
  const survivors = result.split("\n").filter(isEntry).map(routeOf);
  const unexpected = survivors.filter(
    (route) =>
      route &&
      !route.endsWith(".xml") &&
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
  const [source, preamble, sidebarRoutes] = await Promise.all([
    readFile(target, "utf8"),
    readFile(path.join(root, "content", "_llms-preamble.md"), "utf8").then(stripFrontmatter),
    readSidebarRoutes(root),
  ]);
  const result = buildLlmsIndex({ source, preamble, sidebarRoutes });
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

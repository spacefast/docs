import { copyFile, cp, lstat, mkdir, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildRoutingRules, verifyRoutingBudget } from "./redirect-rules.mjs";
import { redirects as authoredRedirects } from "../redirects.ts";

const root = path.resolve(process.cwd());
const markerName = ".spacefast-generated-copy";
const redirectsMarker = "# Generated from generated/redirects.json. Do not edit.\n";
const trees = [
  { source: "generated/errors", target: "content/(reference)/errors" },
  { source: "generated/changelog", target: "content/(reference)/changelog" },
  { source: "generated/setup", target: "content/setup" },
  { source: "generated/connect", target: "content/connect" },
];
// The Agents tab lists the generated /setup/<agent> pages in the order and
// groups the exporter writes to generated/setup/sections.json, so this repo
// keeps no agent list of its own. Each group is a parenthesized folder, so a
// page's breadcrumb names its group without adding a URL segment.
const setupGroups = [
  { group: "featured", folder: "(featured)", title: "Popular agents" },
  { group: "supported", folder: "(supported)", title: "More agents" },
  { group: "deprecated", folder: "(deprecated)", title: "No longer supported" },
];

async function normalizeOverlayLinks(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });
  const retired = new Map(authoredRedirects.map(({ from, to }) => [from, to]));
  for (const entry of entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"))) {
    const file = path.join(entry.parentPath, entry.name);
    const source = await readFile(file, "utf8");
    const normalized = source.replace(/\]\(\/docs\/([^)]*)\)/gu, (_, target) => {
      const [pathname, fragment] = target.split("#");
      const route = `/${pathname.replace(/\/$/u, "")}`;
      const final = retired.get(route) ?? route;
      return `](${final}${fragment ? `#${fragment}` : ""})`;
    });
    if (normalized !== source) await writeFile(file, normalized);
  }
}

async function presentHistory(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });
  for (const entry of entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"))) {
    const file = path.join(entry.parentPath, entry.name);
    let markdown = await readFile(file, "utf8");
    const relative = path.relative(directory, file);
    markdown = markdown.replace(/^#### /gmu, "### ");
    markdown = markdown.replace(/^title: "([^"]+)"/mu, (_, title) => `title: ${JSON.stringify(relative.startsWith("packages") ? `${title} release history` : `Spacefast ${title} release notes`)}`);
    if (relative.startsWith("packages")) {
      const empty = [];
      markdown = markdown.replace(/^## ([^\n]+)\n\n_No noted changes in this release\._\n*/gmu, (_, version) => { empty.push(version); return ""; });
      if (empty.length) markdown += `\n## Publications without separate change notes\n\nThese versions record package publications. Read the [Spacefast release timeline](/changelog) for changes across packages.\n\n${empty.join(", ")}.\n`;
    }
    await writeFile(file, markdown);
  }
}

async function exists(value) {
  try {
    await lstat(value);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

const sections = JSON.parse(await readFile(path.join(root, "generated/setup/sections.json"), "utf8"));
if (sections.schemaVersion !== 1 || !Array.isArray(sections.agents) || !Array.isArray(sections.connect)) {
  throw new Error("generated/setup/sections.json has an unsupported shape");
}
const unknownGroups = sections.agents.filter(({ group }) => !setupGroups.some((known) => known.group === group));
if (unknownGroups.length > 0) {
  throw new Error(`Add generated setup groups to setupGroups: ${unknownGroups.map(({ group }) => group).join(", ")}`);
}

for (const tree of trees) {
  const source = path.join(root, tree.source);
  const target = path.join(root, tree.target);
  const marker = path.join(target, markerName);
  const sourceInfo = await lstat(source);
  if (!sourceInfo.isDirectory() || sourceInfo.isSymbolicLink()) {
    throw new Error(`${tree.source} must be a real directory`);
  }
  if (await exists(target)) {
    const targetInfo = await lstat(target);
    if (
      !targetInfo.isDirectory() ||
      targetInfo.isSymbolicLink() ||
      (await readFile(marker, "utf8").catch(() => null)) !== "spacefast-public-docs\n"
    ) {
      throw new Error(`refusing to replace unowned generated overlay: ${tree.target}`);
    }
    await rm(target, { recursive: true });
  }
  await cp(source, target, { recursive: true });
  await normalizeOverlayLinks(target);
  if (tree.source === "generated/changelog") await presentHistory(target);
  if (tree.source === "generated/errors") {
    for (const { from } of authoredRedirects) {
      const match = /^\/errors\/([a-z0-9_]+)$/u.exec(from);
      if (match) await rm(path.join(target, `${match[1]}.md`), { force: true });
    }
  }
  if (tree.source === "generated/setup") {
    await rm(path.join(target, "sections.json"));
    await writeFile(
      path.join(target, "meta.ts"),
      `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({
        title: "Set up your agent",
        collapsed: false,
        pages: ["index", ...setupGroups.map(({ folder }) => folder.slice(1, -1))],
      })});\n`,
    );
    for (const { group, folder, title } of setupGroups) {
      const pages = sections.agents.filter((agent) => agent.group === group).map(({ id }) => id);
      await mkdir(path.join(target, folder));
      await writeFile(
        path.join(target, folder, "meta.ts"),
        `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({ title, collapsed: group !== "featured", pages })});\n`,
      );
      for (const slug of pages) {
        await rename(path.join(target, `${slug}.md`), path.join(target, folder, `${slug}.md`));
      }
    }
  }
  if (tree.source === "generated/connect") {
    await writeFile(
      path.join(target, "meta.ts"),
      `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({
        title: "Ways to connect",
        collapsed: true,
        pages: ["index", "compare", ...sections.connect.map(({ id }) => id)],
      })});\n`,
    );
  }
  await writeFile(marker, "spacefast-public-docs\n");
}

await mkdir(path.join(root, "content/(reference)/cli"), { recursive: true });
await copyFile(
  path.join(root, "generated/cli/index.md"),
  path.join(root, "content/(reference)/cli/reference.md"),
);
const redirectsTarget = path.join(root, "public/_redirects");
if (await exists(redirectsTarget)) {
  const current = await readFile(redirectsTarget, "utf8");
  if (!current.startsWith(redirectsMarker)) {
    throw new Error("refusing to replace unowned generated overlay: public/_redirects");
  }
}
const redirects = await readFile(path.join(root, "generated/redirects.json"), "utf8").then(
  JSON.parse,
);
const routingRules = buildRoutingRules(redirects);
verifyRoutingBudget(routingRules);
await writeFile(
  redirectsTarget,
  `${redirectsMarker}${routingRules
    .map(({ from, status, to }) => `${from} ${to} ${status}`)
    .join("\n")}\n`,
);

console.log(
  `Prepared the generated CLI reference, error reference, changelog, agent setup and connection pages, and ${routingRules.length} routing rules covering ${redirects.length} compatibility URLs.`,
);

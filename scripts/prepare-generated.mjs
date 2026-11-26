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
  { source: "generated/connect", target: "content/connect" },
];
// Authored guides under content/agents/<slug>.mdx own those canonical routes;
// every other generated client guide from generated/setup/ is mounted under
// parenthesized folders derived from generated/setup/sections.json so every
// agent lives at /docs/agents/<slug>/ in canonical catalog order.
const authoredAgentPages = new Set(["claude-code", "codex", "cursor", "claude-desktop"]);
const sectionsManifest = JSON.parse(
  await readFile(path.join(root, "generated/setup/sections.json"), "utf8"),
);
const codingKinds = new Set(["coding-agent", "editor"]);
const setupSections = [
  {
    folder: "(featured)",
    title: "Featured agents",
    pages: sectionsManifest.agents.filter((agent) => agent.group === "featured").map((a) => a.id),
  },
  {
    folder: "(coding)",
    title: "Coding agents",
    pages: sectionsManifest.agents
      .filter((agent) => agent.group === "supported" && codingKinds.has(agent.kind))
      .map((a) => a.id),
  },
  {
    folder: "(personal)",
    title: "Personal agents",
    pages: sectionsManifest.agents
      .filter((agent) => agent.group === "supported" && !codingKinds.has(agent.kind))
      .map((a) => a.id),
  },
  {
    folder: "(deprecated)",
    title: "No longer supported",
    pages: sectionsManifest.agents.filter((agent) => agent.group === "deprecated").map((a) => a.id),
  },
].filter((section) => section.pages.length > 0);

async function normalizeOverlayLinks(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });
  const retired = new Map(authoredRedirects.map(({ from, to }) => [from, to]));
  for (const entry of entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"))) {
    const file = path.join(entry.parentPath, entry.name);
    const source = await readFile(file, "utf8");
    const normalized = source
      .replace(/\]\(\/docs\/([^)]*)\)/gu, (_, target) => {
        const [pathname, fragment] = target.split("#");
        const route = `/${pathname.replace(/\/$/u, "")}`;
        const final = retired.get(route) ?? route;
        return `](${final}${fragment ? `#${fragment}` : ""})`;
      })
      .replace(/\]\(\/setup\/([a-z0-9-]+)\/?([^)]*)\)/gu, "](/agents/$1$2)")
      .replace(/\]\(\/setup\/?\)/gu, "](/agents)")
      .replace(/https:\/\/spacefast\.com\/docs\/setup\/([a-z0-9-]+)\/?/gu, "https://spacefast.com/docs/agents/$1/")
      .replace(/https:\/\/spacefast\.com\/docs\/setup\/?/gu, "https://spacefast.com/docs/agents/");
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

// Client names and order come directly from generated/setup/sections.json
// exported by @spacefast/common — no manual agent list lives in this repo.
const setupClients = new Map(sectionsManifest.agents.map((agent) => [agent.id, agent.name]));
const setupSidebar = `${JSON.stringify(
  setupSections.map(({ title, pages }) => ({
    title,
    pages: pages
      .filter((slug) => setupClients.has(slug))
      .map((slug) => ({ slug, label: setupClients.get(slug) })),
  })),
  null,
  2,
)}\n`;

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
  if (tree.source === "generated/connect") {
    await writeFile(
      path.join(target, "meta.ts"),
      `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({
        title: "Ways to connect",
        pages: ["index", "compare", ...sectionsManifest.connect.map((method) => method.id)],
      })});\n`,
    );
  }
  await writeFile(marker, "spacefast-public-docs\n");
}

// Clean up any legacy content/setup overlay from earlier builds.
const legacySetupTarget = path.join(root, "content/setup");
if (await exists(legacySetupTarget)) {
  const legacyMarker = path.join(legacySetupTarget, markerName);
  if ((await readFile(legacyMarker, "utf8").catch(() => null)) === "spacefast-public-docs\n") {
    await rm(legacySetupTarget, { recursive: true });
  }
}

// Mount non-authored generated client guides directly under content/agents/ so
// every client lives at /docs/agents/<slug>/ without duplicating authored pages.
const setupSource = path.join(root, "generated/setup");
const agentsRoot = path.join(root, "content/agents");
await writeFile(path.join(agentsRoot, "_sidebar.json"), setupSidebar);
for (const { folder, title, pages } of setupSections) {
  const sectionTarget = path.join(agentsRoot, folder);
  const sectionMarker = path.join(sectionTarget, markerName);
  if (await exists(sectionTarget)) {
    const info = await lstat(sectionTarget);
    if (
      !info.isDirectory() ||
      info.isSymbolicLink() ||
      (await readFile(sectionMarker, "utf8").catch(() => null)) !== "spacefast-public-docs\n"
    ) {
      throw new Error(`refusing to replace unowned generated overlay: content/agents/${folder}`);
    }
    await rm(sectionTarget, { recursive: true });
  }
  const mountedSlugs = pages.filter(
    (slug) => setupClients.has(slug) && !authoredAgentPages.has(slug),
  );
  await mkdir(sectionTarget, { recursive: true });
  await writeFile(
    path.join(sectionTarget, "meta.ts"),
    `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({ title, pages: mountedSlugs })});\n`,
  );
  for (const slug of mountedSlugs) {
    await copyFile(path.join(setupSource, `${slug}.md`), path.join(sectionTarget, `${slug}.md`));
  }
  await normalizeOverlayLinks(sectionTarget);
  await writeFile(sectionMarker, "spacefast-public-docs\n");
}

await mkdir(path.join(root, "content/cli"), { recursive: true });
await copyFile(
  path.join(root, "generated/cli/index.md"),
  path.join(root, "content/cli/reference.md"),
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
  `Prepared the generated CLI reference, error reference, changelog, agent setup, and ${routingRules.length} routing rules covering ${redirects.length} compatibility URLs.`,
);

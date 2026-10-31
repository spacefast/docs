import { copyFile, cp, lstat, mkdir, readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { buildRoutingRules } from "./redirect-rules.mjs";
import { redirects as authoredRedirects } from "../redirects.ts";

const root = path.resolve(process.cwd());
const markerName = ".spacefast-generated-copy";
const redirectsMarker = "# Generated from generated/redirects.json. Do not edit.\n";
const trees = [
  { source: "generated/errors", target: "content/(reference)/errors" },
  { source: "generated/changelog", target: "content/(reference)/changelog" },
  { source: "generated/setup", target: "content/setup" },
];
// The Agents tab sidebar groups the generated /setup/<client> pages into these
// sections (see components/Sidebar.astro). Every generated client must be listed.
// Each section is also a parenthesized folder, so a page's breadcrumb names its
// section without adding a URL segment.
const setupSections = [
  {
    folder: "(coding)",
    title: "Coding agents",
    pages: [
      "claude-code",
      "codex",
      "cursor",
      "vscode",
      "github-copilot",
      "devin-desktop",
      "devin-cloud",
      "zed",
      "gemini-cli",
      "opencode",
      "amp",
      "warp",
      "factory-droid",
      "cline",
      "continue",
      "pi",
    ],
  },
  {
    folder: "(personal)",
    title: "Personal agents",
    pages: ["claude-app", "chatgpt", "claude-desktop", "raycast", "poke", "indent", "hermes", "openclaw"],
  },
];

// Provider pages the generated snapshot links to that have since moved. The
// snapshot is digest-guarded, so its overlay copy carries the current address
// until the next snapshot does. An entry no generated page uses fails the
// build, so the list empties as snapshots catch up.
const movedProviderUrls = new Map([
  [
    "https://developers.openai.com/api/docs/guides/developer-mode",
    "https://developers.openai.com/plugins/deploy/connect-chatgpt",
  ],
  [
    "https://github.com/earendil-works/pi/blob/main/packages/coding-agent/README.md#skills",
    "https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/skills.md",
  ],
]);
const usedProviderUrls = new Set();

async function updateMovedUrls(file) {
  const markdown = await readFile(file, "utf8");
  let updated = markdown;
  for (const [from, to] of movedProviderUrls) {
    if (!updated.includes(from)) continue;
    updated = updated.replaceAll(from, to);
    usedProviderUrls.add(from);
  }
  if (updated !== markdown) await writeFile(file, updated);
}

async function markdownFiles(directory) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.join(entry.parentPath, entry.name));
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

// Short client names from the generated setup index ("- [Codex](/setup/codex): …").
// Checked before any overlay is replaced, so a failure leaves the last good copy.
const setupClients = new Map(
  [...(await readFile(path.join(root, "generated/setup/index.md"), "utf8")).matchAll(
    /^- \[([^\]]+)\]\(\/setup\/([a-z0-9-]+)\)/gmu,
  )].map(([, name, slug]) => [slug, name]),
);
const listedClients = new Set(setupSections.flatMap(({ pages }) => pages));
const unlistedClients = [...setupClients.keys()].filter((slug) => !listedClients.has(slug));
if (unlistedClients.length > 0) {
  throw new Error(`Add generated setup clients to setupSections: ${unlistedClients.join(", ")}`);
}
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
  for (const file of await markdownFiles(target)) await updateMovedUrls(file);
  if (tree.source === "generated/errors") {
    for (const { from } of authoredRedirects) {
      const match = /^\/errors\/([a-z0-9_]+)$/u.exec(from);
      if (match) await rm(path.join(target, `${match[1]}.md`), { force: true });
    }
  }
  if (tree.source === "generated/setup") {
    await writeFile(
      path.join(target, "meta.ts"),
      `import { defineMeta } from "blume";\n\nexport default defineMeta({ title: "Setup", collapsed: false });\n`,
    );
    await writeFile(path.join(target, "_sidebar.json"), setupSidebar);
    for (const { folder, title, pages } of setupSections) {
      await mkdir(path.join(target, folder));
      await writeFile(
        path.join(target, folder, "meta.ts"),
        `import { defineMeta } from "blume";\n\nexport default defineMeta(${JSON.stringify({ title, pages })});\n`,
      );
      for (const slug of pages.filter((slug) => setupClients.has(slug))) {
        await rename(path.join(target, `${slug}.md`), path.join(target, folder, `${slug}.md`));
      }
    }
  }
  await writeFile(marker, "spacefast-public-docs\n");
}

await mkdir(path.join(root, "content/cli"), { recursive: true });
await copyFile(
  path.join(root, "generated/cli/index.md"),
  path.join(root, "content/cli/reference.md"),
);
await updateMovedUrls(path.join(root, "content/cli/reference.md"));
const unusedProviderUrls = [...movedProviderUrls.keys()].filter((url) => !usedProviderUrls.has(url));
if (unusedProviderUrls.length > 0) {
  throw new Error(`No generated page links to these moved URLs anymore; remove them: ${unusedProviderUrls.join(", ")}`);
}

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
const staticRules = routingRules.filter(({ from }) => !from.includes("*")).length;
if (staticRules > 2_000 || routingRules.length > 2_100) {
  throw new Error(
    `Generated compatibility routes exceed Spacefast limits: ${staticRules} static, ${routingRules.length} total`,
  );
}
await writeFile(
  redirectsTarget,
  `${redirectsMarker}${routingRules
    .map(({ from, status, to }) => `${from} ${to} ${status}`)
    .join("\n")}\n`,
);

console.log(
  `Prepared the generated CLI reference, error reference, changelog, agent setup, and ${routingRules.length} routing rules covering ${redirects.length} compatibility URLs.`,
);

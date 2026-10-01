import { copyFile, cp, lstat, mkdir, readFile, rm, writeFile } from "node:fs/promises";
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
const setupSections = [
  {
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
    title: "Personal agents",
    pages: ["claude-app", "chatgpt", "claude-desktop", "raycast", "poke", "indent", "hermes", "openclaw"],
  },
];

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
  }
  await writeFile(marker, "spacefast-public-docs\n");
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

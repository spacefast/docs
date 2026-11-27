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

async function presentClaudeAppSetup(directory) {
  const file = path.join(directory, "(supported)", "claude-app.md");
  if (!(await exists(file))) return;
  const content = [
    "---",
    'title: "Connect Claude to Spacefast"',
    'description: "Compare Claude web, mobile, Desktop, Cowork, and Claude Code, see what each connection method enables, and add Spacefast to your Claude account."',
    "seo:",
    '  canonical: "https://spacefast.com/docs/setup/claude-app/"',
    "---",
    "",
    "Connect Spacefast to your Claude account once to publish and manage Spaces from Claude on the web, iOS, Android, Claude Desktop, Cowork, and account-signed-in Claude Code sessions.",
    "",
    "## Which Claude app does what",
    "",
    "Anthropic ships several Claude apps that share one account but support different connection methods and local file access:",
    "",
    "| Claude app | What it is | How Spacefast connects | Local files | Setup guide |",
    "| --- | --- | --- | --- | --- |",
    "| **Claude on web and mobile** (`claude.ai`, iOS, Android) | Browser and mobile chat clients | [Directory connector](/connect/directory-connector/) (hosted MCP over OAuth) or [Spacefast plugin](/connect/plugin/) | No local filesystem; publishes inline files or uploads | Steps below |",
    "| **Claude Desktop** (macOS, Windows) | Native desktop app with Chat and Cowork tabs | Syncs your account connector and plugin automatically, or runs a local [Desktop extension](/connect/desktop-extension/) (`.mcpb`) | Local tools run via Desktop extension or local Cowork | [Claude Desktop](/setup/claude-desktop/) |",
    "| **Claude Cowork** | Multi-step task runner on paid plans (runs locally in Desktop or in the cloud across web, desktop, and mobile) | Cloud tasks use the hosted [Directory connector](/connect/directory-connector/); local Desktop tasks can also run a plugin's local MCP server | Local Desktop tasks access chosen folders; cloud tasks do not | [Claude Cowork](/setup/claude-cowork/) |",
    "| **Claude Code** | Terminal and IDE coding agent for local repositories | Local [stdio MCP](/connect/stdio-mcp/) (`npx -y spacefast mcp`), [Spacefast plugin](/connect/plugin/) (MCP, skills, and hooks), or account-synced connector | Full local repository and folder publishing | [Claude Code](/setup/claude-code/) |",
    "",
    "Sources: [Use connectors in Claude](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), [Use plugins in Claude](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), [Use Claude Cowork on web, desktop, and mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile), and [Claude Code MCP docs](https://code.claude.com/docs/en/mcp).",
    "",
    "## What each connection method gives you",
    "",
    "- **[Directory connector](/connect/directory-connector/) (recommended for chat and cloud Cowork):** Connects Claude directly to Spacefast's hosted MCP server (`https://mcp.spacefast.com`) over OAuth. One setup syncs across web, mobile, Desktop, and Cowork with nothing to install locally ([Directory vs. custom connectors](https://claude.com/docs/connectors/building/directory-vs-custom)).",
    "- **[Spacefast plugin](/connect/plugin/):** Bundles Spacefast's skills and MCP configuration from `spacefast/plugins` so Claude loads Spacefast conventions automatically alongside the connector across Chat, Cowork, and Claude Code ([Use plugins in Claude](https://support.claude.com/en/articles/13837440-use-plugins-in-claude)).",
    "- **[Custom connector](/connect/hosted-mcp/):** Manual fallback if the directory link does not open — add `https://mcp.spacefast.com` in Claude's connector settings ([Custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)).",
    "- **[Desktop extension](/connect/desktop-extension/) (`.mcpb`):** Claude Desktop only. Runs the Spacefast MCP server locally via Node.js (`npx`) when you need local machine tools ([Desktop extensions spec](https://github.com/modelcontextprotocol/mcpb)).",
    "",
    "## Recommended: Add the Directory connector",
    "",
    "**[Add to Claude](https://claude.ai/directory/b0989c59-00b4-40db-a6d1-1e591ce2516c)**",
    "",
    "1. Open the listing above and choose **Connect** (if Claude opens a custom connector form, add the connector first, then choose **Connect**).",
    "2. Sign in to Spacefast and approve access.",
    "3. Turn **Spacefast** on in any conversation where you want Claude to publish or manage Spaces.",
    "",
    "On a Claude Team or Enterprise plan, an organization owner must enable the connector before members can connect it ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)).",
    "",
    "If the directory link does not open, add Spacefast's hosted MCP endpoint manually as a custom connector:",
    "",
    "```text",
    "https://mcp.spacefast.com",
    "```",
    "",
    "## Add the Spacefast plugin (connector + skills)",
    "",
    "Add the plugin repository `spacefast/plugins` to load Spacefast skills alongside the connector in Chat, Cowork, and Claude Code:",
    "",
    "```text",
    "spacefast/plugins",
    "```",
    "",
    "1. In Claude, open **Plugins** in the sidebar (or **Customize -> Plugins** on older Team and Enterprise layouts), then choose **Add -> Add marketplace -> Add from a repository**.",
    "2. Paste `spacefast/plugins` and add the marketplace.",
    "3. Select the **Spacefast** plugin and choose **Add**.",
    "4. Sign in to Spacefast and approve access when prompted. If Claude reports that the Spacefast connector is not connected, add the Directory connector above too.",
    "",
    "On Team and Enterprise plans, owners can restrict allowed plugin marketplaces and must keep **Skills** enabled for plugins to run in Claude Desktop. Removing the plugin does not disconnect the Spacefast connector; disconnect it separately in connector settings ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude)).",
    "",
    "## Hand off setup with one prompt",
    "",
    "Prefer to let Claude pick the best setup lane for the surface you are in? Paste this [setup prompt](/connect/setup-prompt/):",
    "",
    "```text",
    "Fetch https://spacefast.com/setup.md",
    "```",
    "",
    "## Plan limits by Anthropic tier",
    "",
    "- **All plans (Free, Pro, Max, Ultra, Team, Enterprise):** Directory connectors work on every plan. Team and Enterprise require an owner to enable the connector first ([Use connectors](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)).",
    "- **Free:** Limited to one custom remote MCP connector; Cowork is not available ([Custom connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), [Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)).",
    "- **Pro, Max, Ultra, Team, and Enterprise:** Full plugin support and Claude Cowork access. A plugin's local MCP server runs in Claude Code and in local Claude Desktop Cowork sessions, not in web chat or cloud Cowork tasks — use the hosted Directory connector there ([Use plugins in Claude](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), [Cowork on web, desktop, and mobile](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile)).",
    "",
    "[Agent documentation](/agents/) · [Compare every connection method](/connect/compare/) · [Claude connector docs](https://claude.com/docs/connectors/building/directory-vs-custom)",
    "",
  ].join("\n");
  await writeFile(file, content);
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
    await presentClaudeAppSetup(target);
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

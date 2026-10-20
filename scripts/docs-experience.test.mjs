import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = path.join(root, "dist");

async function builtPage(route) {
  const name = route === "/" ? "index" : route.slice(1);
  const source = await readFile(path.join(dist, `${name}.md`), "utf8");
  return source.replace(/^---\n[\s\S]*?\n---\n/u, "").trimStart();
}

function opening(page) {
  const paragraph = page.split(/\n\s*\n/u).find((block) => {
    const text = block.trim();
    return text && !/^(#|<|:::|```|\||- |\d+\. )/u.test(text);
  });
  assert.ok(paragraph, "page should have an opening paragraph");
  return paragraph.replace(/\s+/gu, " ");
}

test("project configuration explains both supported formats and migration", async () => {
  const config = await builtPage("/config-file");
  assert.match(config, /sf\.jsonc.*permanently supported; they are not deprecated/u);
  for (const symbol of ["defineConfig", "SpacefastConfig", "SpacefastConfigInput"]) {
    assert.ok(config.includes(symbol), `configuration must explain ${symbol}`);
  }
  assert.match(config, /1\. `spacefast\.config\.ts`\s+2\. `sf\.jsonc`/u);
  assert.match(config, /does not fall back to another file/u);
  assert.match(config, /There is no `sf migrate config` command/u);
  assert.match(config, /Run `sf build` from the project root/u);
  assert.match(config, /Connected Git repository builds read `spacefast\.config\.ts` too/u);
  assert.match(config, /hosted MCP inline publishing cannot execute it/u);
  assert.match(config, /https:\/\/spacefast\.com\/schemas\/sf\.json/u);

  const project = await builtPage("/cli/project");
  assert.match(project, /`sf init` writes `spacefast\.config\.ts`/u);
  assert.doesNotMatch(project, /`sf init` writes `sf\.jsonc`/u);
  const crons = await builtPage("/crons");
  assert.match(crons, /```ts spacefast\.config\.ts/u);
  const git = await builtPage("/git");
  assert.match(git, /Repository builds read `spacefast\.config\.ts`/u);
  const index = await readFile(path.join(dist, "llms.txt"), "utf8");
  assert.match(index, /Project configuration.*https:\/\/spacefast\.com\/docs\/config-file/u);
});

test("every authored page opens with its subject instead of a page promise", async () => {
  const offenders = [];
  const manifest = JSON.parse(await readFile(path.join(root, ".blume", "blume.manifest.json"), "utf8"));
  const authored = manifest.routes.filter((route) =>
    route.source?.name === "filesystem" && route.entryId?.endsWith(".mdx"),
  );
  for (const route of authored) {
    const lead = opening(await builtPage(route.path));
    if (/^(after this page|by the end of this page)\b/iu.test(lead)) {
      offenders.push(route.path);
    }
  }
  assert.ok(authored.length > 50, "the authored corpus should be present");
  assert.deepEqual(offenders, [], "generic page promises hide the useful first fact");
});

test("a browser-first reader sees Drop before the CLI install on the homepage", async () => {
  const home = await builtPage("/");
  const publish = await builtPage("/publish");
  const drop = home.indexOf("no install, no account required");
  const install = home.indexOf("npm install -g spacefast");
  assert.ok(drop >= 0 && install > drop, "show Drop before the install command");
  assert.match(home, /\[Drop\]\(\/docs\/publish#publish\)/u);
  assert.match(publish.replaceAll("**", ""), /Drop takes a folder/iu);
});

test("Quickstart gives a no-install route before the CLI steps", async () => {
  const quickstart = await builtPage("/quickstart");
  const drop = quickstart.indexOf("Don't want to install anything?");
  const install = quickstart.indexOf("Install the CLI");
  assert.ok(drop >= 0 && install > drop, "offer Drop before CLI instructions");
  assert.match(quickstart.slice(drop, install), /\[Drop\]\(\/docs\/publish#publish\)/u);
});

test("unfamiliar homepage terms have a linked glossary with definitions", async () => {
  const home = await builtPage("/");
  const glossary = await builtPage("/glossary");
  assert.match(home, /\[glossary\]\(\/docs\/glossary\)/iu);
  for (const term of ["Ability", "Capsule", "Grant", "Live", "Space", "Version", "Zero"]) {
    assert.match(glossary, new RegExp(`^## ${term}(?:\\b| \\()`, "mu"), `${term} needs a definition`);
  }
});

test("Database gives the Zero prerequisite before query instructions", async () => {
  const database = await builtPage("/database");
  const prerequisite = database.indexOf("Don't have a database yet?");
  const query = database.indexOf("## Query it from code");
  assert.ok(prerequisite >= 0 && query > prerequisite);
  assert.match(database.slice(prerequisite, query), /\[Zero\]\(\/docs\/zero-runtime\)/u);
  assert.match(database.slice(prerequisite, query), /kind: "zero"/u);
  assert.match(database.slice(prerequisite, query), /\[runtime block\]\(\/docs\/zero-runtime#declare-it\)/u);
  assert.match(database.slice(prerequisite, query), /`server`/u);
  assert.match(database.slice(prerequisite, query), /server file is required/iu);
  assert.match(database.slice(prerequisite, query), /sf init --runtime zero/u);
});

test("Troubleshooting gives a first diagnostic step before the error catalog", async () => {
  const troubleshooting = await builtPage("/troubleshooting");
  const overview = troubleshooting.indexOf("Overview");
  const errors = troubleshooting.indexOf("## Publishing");
  assert.ok(overview >= 0 && errors > overview, "start with the Space Overview");
  assert.match(troubleshooting.slice(0, errors), /last publish and its status/iu);
});

const firstFactCases = [
  {
    route: "/versions",
    question: "Does rollback rebuild, and which versions can it use?",
    evidence: [/rollback/iu, /doesn't rebuild|does not rebuild/iu, /live/iu, /retained, ready version/iu, /deleted or expired versions cannot/iu],
  },
  {
    route: "/crons",
    question: "Where is a schedule set, and when does it take effect?",
    evidence: [/no dashboard editor/iu, /sf\.jsonc/u, /publish/iu],
  },
  {
    route: "/environment-variables",
    question: "Which variable wins when Space and team names collide?",
    evidence: [/Space-level value/iu, /wins/iu, /team/iu],
  },
  {
    route: "/access",
    question: "Does removing one public grant remove all access?",
    evidence: [/removing a public grant/iu, /no other public grant matches/iu, /links, people, and team access can remain/iu],
  },
  {
    route: "/caching",
    question: "How do I request a cache refresh?",
    evidence: [/republish/iu, /fresh response/iu],
  },
  {
    route: "/stats",
    question: "Which traffic counts exclude crawlers?",
    evidence: [
      /views exclude crawlers and failed requests/iu,
      /requests count every HTTP request/iu,
      /unique visitors .* without those filters/iu,
    ],
  },
];

for (const { route, question, evidence } of firstFactCases) {
  test(`${route} answers “${question}” in its opening paragraph`, async () => {
    const lead = opening(await builtPage(route));
    for (const pattern of evidence) assert.match(lead, pattern);
  });
}

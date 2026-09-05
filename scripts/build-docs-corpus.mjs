import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SITE_ORIGIN = "https://spacefast.com";
const DOCS_BASE = "/docs";
const ESSENTIAL_PATHS = new Set([
  "/",
  "/agents",
  "/anonymous-and-claim",
  "/publish",
  "/quickstart",
]);

function normalizePath(url) {
  const parsed = new URL(url);
  if (parsed.origin !== SITE_ORIGIN) {
    throw new Error(`Unexpected documentation URL: ${url}`);
  }
  const mountedPath = parsed.pathname || "/";
  if (mountedPath !== DOCS_BASE && !mountedPath.startsWith(`${DOCS_BASE}/`)) {
    throw new Error(`Documentation URL is outside ${DOCS_BASE}: ${url}`);
  }
  const path = mountedPath === DOCS_BASE ? "/" : mountedPath.slice(DOCS_BASE.length);
  return path.length > 1 ? path.replace(/\/+$/u, "") : path;
}

function pageMetadata(path) {
  if (
    ["/api/reference", "/partners/api/reference", "/platforms/api/reference"].some(
      (prefix) => path === prefix || path.startsWith(`${prefix}/`),
    )
  ) return { kind: "api", tier: "reference" };
  if (path === "/api") return { kind: "api", tier: "full" };
  if (path === "/cli" || path.startsWith("/cli/")) return { kind: "cli", tier: "full" };
  if (path === "/errors" || path.startsWith("/errors/")) {
    return { kind: "error", tier: "reference" };
  }
  if (path === "/agents" || path === "/anonymous-and-claim" || path === "/publish") {
    return { kind: "workflow", tier: ESSENTIAL_PATHS.has(path) ? "essential" : "full" };
  }
  if (path.startsWith("/recipes/")) return { kind: "recipe", tier: "full" };
  return { kind: "guide", tier: ESSENTIAL_PATHS.has(path) ? "essential" : "full" };
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/gu, " ")
    .replace(/<[^>]+>/gu, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/gu, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/gu, "$1")
    .replace(/^#{1,6}\s+/gmu, "")
    .replace(/[*_`>|~]/gu, "")
    .replace(/\s+/gu, " ")
    .trim();
}

function summaryFor(body) {
  const paragraphs = body
    .split(/\n\s*\n/gu)
    .map(plainText)
    .filter((paragraph) => paragraph.length >= 24);
  const summary = paragraphs[0] ?? plainText(body);
  return summary.length > 240 ? `${summary.slice(0, 237).trimEnd()}…` : summary;
}

export function parseLlmsFull(source) {
  const pages = [];
  const sectionPattern =
    /(?:^|\n)# ([^\n]+)\nSource: (https:\/\/spacefast\.com\/docs(?:\/[^\n]*)?)\n\n([\s\S]*?)(?=\n---\n|$)/gu;
  for (const match of source.matchAll(sectionPattern)) {
    const title = match[1]?.trim();
    const url = match[2]?.trim();
    const body = match[3]?.trim();
    if (!title || !url || !body) continue;
    const path = normalizePath(url);
    const { kind, tier } = pageMetadata(path);
    pages.push({
      body,
      kind,
      path,
      slug: path === "/" ? "home" : path.slice(1),
      summary: summaryFor(body),
      tier,
      title,
      url,
    });
  }
  return pages.sort((left, right) => left.path.localeCompare(right.path));
}

function currentRevision(projectRoot) {
  if (process.env.SPACEFAST_DOCS_REVISION) return process.env.SPACEFAST_DOCS_REVISION;
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  return execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: projectRoot,
    encoding: "utf8",
  }).trim();
}

export async function buildDocsCorpus({
  input,
  output,
  projectRoot = process.cwd(),
  revision = currentRevision(projectRoot),
}) {
  const pages = parseLlmsFull(await readFile(input, "utf8"));
  if (pages.length === 0) throw new Error("No documentation pages found in llms-full.txt.");
  const corpus = { schemaVersion: 1, revision, pages };
  await writeFile(output, `${JSON.stringify(corpus)}\n`);
  return corpus;
}

const scriptPath = fileURLToPath(import.meta.url);
const isMain = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url;
if (isMain) {
  const projectRoot = resolve(dirname(scriptPath), "..");
  const corpus = await buildDocsCorpus({
    input: resolve(projectRoot, "dist/llms-full.txt"),
    output: resolve(projectRoot, "dist/docs-corpus.json"),
    projectRoot,
  });
  process.stdout.write(
    `Generated docs-corpus.json with ${corpus.pages.length} pages at ${corpus.revision}.\n`,
  );
}

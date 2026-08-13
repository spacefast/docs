// Prose style gate. Runs Vale over every docs page (content/**) and over the
// prose fields (summary/description) of the generated OpenAPI snapshot, so API
// reference copy is held to the same standard as authored pages.
//
// OpenAPI prose is extracted into a temporary markdown file (Vale does not
// read JSON); alerts are mapped back to spec + JSON Pointer for the report.

import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(import.meta.url), "../..");

// Overlays under content/ are materialized by prepare-generated.mjs; keep the
// same chain every other entry point uses so this is standalone-safe.
execFileSync(process.execPath, [join(root, "scripts/verify-generated.mjs")], { stdio: "inherit" });
execFileSync(process.execPath, [join(root, "scripts/prepare-generated.mjs")], { stdio: "inherit" });

const which = spawnSync("vale", ["--version"], { encoding: "utf8" });
if (which.error) {
  console.error("verify-prose: vale is not installed (https://vale.sh — `brew install vale`).");
  process.exit(2);
}

// --- collect markdown targets -----------------------------------------------

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else if (/\.(md|mdx)$/.test(entry.name)) out.push(path);
  }
  return out;
}

// Root-relative paths, not absolute: Vale matches section globs (e.g. the
// changelog carve-out) against the path exactly as passed.
const markdownTargets = walk(join(root, "content")).map((p) => relative(root, p));

// --- extract OpenAPI prose ---------------------------------------------------

const specs = ["generated/openapi/api.json", "generated/openapi/platform.json"];
const escapePointer = (part) => String(part).replaceAll("~", "~0").replaceAll("/", "~1");

// text -> [{ spec, pointer }]
const proseSources = new Map();
for (const spec of specs) {
  const document = JSON.parse(readFileSync(join(root, spec), "utf8"));
  const visit = (node, pointer) => {
    if (Array.isArray(node)) {
      node.forEach((item, index) => visit(item, `${pointer}/${index}`));
    } else if (node && typeof node === "object") {
      for (const [key, value] of Object.entries(node)) {
        const childPointer = `${pointer}/${escapePointer(key)}`;
        if ((key === "description" || key === "summary") && typeof value === "string") {
          if (!proseSources.has(value)) proseSources.set(value, []);
          proseSources.get(value).push({ spec, pointer: childPointer });
        } else {
          visit(value, childPointer);
        }
      }
    }
  };
  visit(document, "");
}

const scratch = mkdtempSync(join(tmpdir(), "vale-openapi-"));
const extractionFiles = new Map(); // file path -> lineMap [{ start, end, sources }]
{
  const lines = [];
  const lineMap = [];
  for (const [text, sources] of proseSources) {
    const start = lines.length + 1;
    lines.push(...text.split("\n"));
    lineMap.push({ start, end: lines.length, sources });
    lines.push("");
  }
  const file = join(scratch, "openapi-prose.md");
  writeFileSync(file, lines.join("\n") + "\n");
  extractionFiles.set(file, lineMap);
}

// --- run vale ----------------------------------------------------------------

const vale = spawnSync(
  "vale",
  ["--no-exit", "--output=JSON", ...markdownTargets, ...extractionFiles.keys()],
  { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
);
if (vale.status !== 0 || !vale.stdout) {
  console.error("verify-prose: vale failed to run:\n" + (vale.stderr || vale.stdout));
  process.exit(2);
}

const alertsByFile = JSON.parse(vale.stdout);
let count = 0;
for (const [file, alerts] of Object.entries(alertsByFile)) {
  for (const alert of alerts) {
    count += 1;
    let location = `${relative(root, resolve(root, file))}:${alert.Line}:${alert.Span[0]}`;
    const lineMap = extractionFiles.get(resolve(root, file));
    if (lineMap) {
      const entry = lineMap.find((e) => alert.Line >= e.start && alert.Line <= e.end);
      const source = entry?.sources[0];
      location = source
        ? `${source.spec}#${source.pointer}${entry.sources.length > 1 ? ` (+${entry.sources.length - 1} more)` : ""}`
        : `openapi-prose:${alert.Line}`;
    }
    console.error(`${alert.Severity === "error" ? "✖" : "▲"} ${location}\n    ${alert.Check}: ${alert.Message}`);
  }
}

rmSync(scratch, { recursive: true, force: true });

if (count > 0) {
  console.error(`\nverify-prose: ${count} alert(s). Docs prose and OpenAPI descriptions must pass Vale.`);
  process.exit(1);
}
console.log(`verify-prose: clean (${markdownTargets.length} pages, ${proseSources.size} OpenAPI prose fields).`);

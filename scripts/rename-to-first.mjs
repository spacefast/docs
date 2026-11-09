#!/usr/bin/env node
// Renames Zero v2 to First across the authored docs. Zero 0.8 keeps the name
// "Zero". Idempotent: running it again on its own output changes nothing, so
// an open branch takes the rename by merging main and running it once more.
//
// Generated snapshots (generated/**) are producer-owned and change only when
// the exporter re-runs against a renamed CLI and API.
import { readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

// 1. File moves, in order. The v2 page and its CLI page become /first and
// /cli/first; then the Zero 0.8 page takes over /zero, which documents Zero.
// A move runs only while its source exists and its target does not.
const moves = [
  ["content/(dynamic)/zero.mdx", "content/(dynamic)/first.mdx"],
  ["content/cli/zero.mdx", "content/cli/first.mdx"],
  ["content/(dynamic)/zero-migrate.mdx", "content/(dynamic)/zero.mdx"],
];
const zero08Page = path.join("content", "(dynamic)", "zero.mdx");

// 2. Names that must survive the text pass untouched, because Zero 0.8 or the
// production API and engine already ship them. Each is swapped for a token
// before the replacements and restored after.
const kept = [
  // Zero 0.8: its runtime declaration, packages, converter flag and page.
  '"runtime": { "kind": "zero" }',
  'runtime: { kind: "zero"',
  '`runtime.kind` to `"zero"`',
  "@spacefast/zero/client",
  "@spacefast/zero",
  "--from zero-0.8",
  // Links to the Zero 0.8 page at /zero; longer entries before shorter ones.
  "Zero 0.8](/zero",
  "Zero 0.8",
  "Zero 0.9",
  "older Zero app",
  "older Zero site",
  // Copy that names Zero as the retired runtime, written by hand after the
  // first run; protected so a re-run leaves it alone.
  "formerly Zero v2",
  "Have a Zero app",
  "Zero is retired",
  "## Zero\n",
  "Existing Zero Spaces",
  "Zero's last release",
  "Your Zero app",
  "A Zero app is one",
  "publishing a Zero app",
  // Shipped in production: API operations and paths, Abilities, storage.
  "createSpaceZeroToken",
  "listSpaceZeroAbilities",
  "listspacezeroabilities",
  "/zero/token",
  "zero/storage-",
  "zero-storage",
  "sfz_",
  "`ZERO_`",
  "version.zero.migration",
  // Error codes. They keep their names; the reference pages are generated.
  "zero_mixed_generation",
  "zero_migration_required",
  // Ordinary English and unrelated terms.
  "nonzero",
  "non-zero",
  "zero-dependency",
  "zeros",
  "zero or more",
  "zero or",
  "at zero",
  "position zero",
  "exited zero",
  "hit zero",
  "a zero ",
  "zero operations",
  "Zero alerts",
  "zero 404",
];

// 3. Replacements for v2 names, most specific first. Every left side is gone
// after one run, which keeps the script idempotent.
const replacements = [
  // Routes.
  ["(/zero)", "(/first)"],
  ["(/zero#", "(/first#"],
  ['href="/zero"', 'href="/first"'],
  ["(/cli/zero)", "(/cli/first)"],
  ["(/cli/zero#", "(/cli/first#"],
  ['href="/cli/zero"', 'href="/cli/first"'],
  ["#sf-zero-", "#sf-first-"],
  // Navigation entries in meta.ts.
  ['["zero", "functions"', '["first", "functions"'],
  ['"wordpress", "zero-migrate"]', '"wordpress", "zero"]'],
  ['    "zero",\n', '    "first",\n'],
  // Files, folders and wire names of a First app.
  ["zero.config.ts", "first.config.ts"],
  ["zero.gen.ts", "first.gen.ts"],
  [".zero/", ".first/"],
  ["zero/_generated/", "first/_generated/"],
  ["zero/migrations/", "first/_generated/migrations/"],
  ["zero/client/", "first/client/"],
  ["/wp-json/zero/v1", "/wp-json/first/v1"],
  ["zero-identity", "first-identity"],
  ["zero-signature", "first-signature"],
  ["SPACEFAST_ZERO_BIN", "SPACEFAST_FIRST_BIN"],
  ['from "zero"', 'from "first"'],
  ['`"zero"` module', '`"first"` module'],
  ['Imports can be `"zero"`', 'Imports can be `"first"`'],
  ["const zero = createClient", "const first = createClient"],
  ["await zero.", "await first."],
  ["`zero.shoppingList`", "`first.shoppingList`"],
  ["a `zero` binary", "a `first` binary"],
  // Commands.
  ["sf zero ", "sf first "],
  ["sf zero`", "sf first`"],
  ["sf zero\n", "sf first\n"],
  ["--runtime zero", "--runtime first"],
  ["static|zero|functions", "static|first|functions"],
  ["static\\|zero\\|functions", "static\\|first\\|functions"],
  ["`zero` writes a starter", "`first` writes a starter"],
  ["Zero compiler", "First compiler"],
  // Product name in prose, after every 0.8 phrase is protected above.
  ["Zero v2", "First"],
  ["Zero's", "First's"],
  ["Zero", "First"],
];

// Authored files only; never generated/, .blume/ or dist/.
// The pricing fixture mirrors the API's pricing document; its labels follow the API.
const roots = ["content", "README.md", "evals.yaml", "redirects.ts"];
const textFile = /\.(mdx?|ts|mjs|json|ya?ml)$/u;

async function exists(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

// Build overlays materialized from generated/ (see AGENTS.md); never authored.
const overlays = [
  "content/cli/reference.md",
  "content/(reference)/errors",
  "content/(reference)/changelog",
  "content/setup",
  "content/_pricing",
];

async function files(entry) {
  const full = path.join(root, entry);
  const info = await stat(full);
  if (info.isFile()) return [full];
  const out = [];
  for (const child of await readdir(full, { withFileTypes: true })) {
    const childPath = path.join(entry, child.name);
    if (overlays.includes(childPath)) continue;
    if (child.isDirectory()) out.push(...(await files(childPath)));
    else if (textFile.test(child.name)) out.push(path.join(root, childPath));
  }
  return out;
}

// Links to the Zero 0.8 page, rewritten before any name is protected: the page
// moved from /zero-migrate to /zero, and its title is now "Zero 0.8".
const prepass = [["[Migrate an older Zero app](/zero-migrate", "[Zero 0.8](/zero"]];

function renameText(source, file) {
  // The Zero 0.8 page names the old runtime throughout; only its links to the
  // First pages and First's own names change there.
  const isZero08Page = file === path.join(root, zero08Page);
  const tokens = [];
  let text = source;
  for (const [from, to] of prepass) text = text.split(from).join(to);
  const protect = (value) => {
    text = text.split(value).join(`\u0000${tokens.length}\u0000`);
    tokens.push(value);
  };
  for (const value of kept) protect(value);
  if (isZero08Page) {
    for (const value of ["Zero app", "Zero apps", "a Zero", "Zero's", "Zero 0.9", "Zero."]) protect(value);
  }
  for (const [from, to] of replacements) {
    if (isZero08Page && (from === "Zero" || from === "Zero's")) continue;
    text = text.split(from).join(to);
  }
  return text.replace(/\u0000(\d+)\u0000/gu, (_, index) => tokens[Number(index)]);
}

let moved = 0;
for (const [from, to] of moves) {
  if ((await exists(path.join(root, from))) && !(await exists(path.join(root, to)))) {
    await rename(path.join(root, from), path.join(root, to));
    moved += 1;
  }
}

let changed = 0;
for (const entry of roots) {
  if (!(await exists(path.join(root, entry)))) continue;
  for (const file of await files(entry)) {
    const before = await readFile(file, "utf8");
    const after = renameText(before, file);
    if (after !== before) {
      await writeFile(file, after);
      changed += 1;
    }
  }
}

console.log(`rename-to-first: moved ${moved} file(s), rewrote ${changed} file(s).`);

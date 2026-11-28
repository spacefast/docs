import { lstat, readdir, readFile, readlink } from "node:fs/promises";
import { relative, resolve } from "node:path";

const root = resolve(process.cwd());
const skippedDirectories = new Set([
  ".blume",
  ".blume-base-test",
  ".blume-verify",
  ".git",
  "dist",
  "node_modules",
]);
const skippedLockfiles = new Set([
  "bun.lock",
  "package-lock.json",
  "pnpm-lock.yaml",
  "skills-lock.json",
  "yarn.lock",
]);
const privateRepositoryNames = [["mono", "blume"].join("-")];
const internalMarkers = [
  ["internal", "only"].join(" "),
  ["private", "only"].join(" "),
  ["do not", "distribute"].join(" "),
  ["confi", "dential"].join(""),
];
const decoder = new TextDecoder("utf-8", { fatal: true });

const files = [];
const symlinks = [];

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    if (
      skippedDirectories.has(entry.name) &&
      (entry.isDirectory() || (entry.name === ".git" && entry.isFile()))
    ) {
      continue;
    }
    if (skippedLockfiles.has(entry.name) || entry.name.endsWith(".lock")) {
      continue;
    }

    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
    } else if (entry.isSymbolicLink()) {
      symlinks.push(path);
    } else if (entry.isFile()) {
      files.push(path);
    }
  }
};

await walk(root);

const violations = [];
const report = (path, line, rule) => {
  violations.push({
    line,
    path: relative(root, path) || ".",
    rule,
  });
};

const lineForOffset = (text, offset) => text.slice(0, offset).split("\n").length;

const firstMatch = (text, pattern) => {
  pattern.lastIndex = 0;
  return pattern.exec(text);
};

const scanText = (path, text) => {
  const fixedRules = [
    {
      name: "local absolute filesystem path",
      pattern:
        /(?:^|[\s('"`])(?:\/(?:home|Users)\/[A-Za-z0-9._-]+\/|[A-Za-z]:\\Users\\[^\\\s]+\\|file:\/\/\/(?:home|Users)\/)/mu,
    },
    {
      name: "private GitHub pull request or workflow URL",
      pattern: /https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/(?:actions\/runs|pull)\/\d+/iu,
    },
    {
      name: "SSH repository metadata",
      pattern: /\bgit@github\.com:[^\s"']+\.git\b/iu,
    },
    {
      name: "private key material",
      pattern: new RegExp(
        `-----BEGIN (?:RSA |EC |OPENSSH )?${["PRIVATE", "KEY"].join(" ")}-----`,
        "u",
      ),
    },
    {
      name: "GitHub access token",
      pattern: /\b(?:gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b/u,
    },
    {
      name: "cloud or payment secret",
      pattern:
        /\b(?:AKIA[0-9A-Z]{16}|sk_(?:live|test)_[A-Za-z0-9]{16,}|xox[baprs]-[A-Za-z0-9-]{16,})\b/u,
    },
    {
      name: "JSON web token",
      pattern: /\beyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/u,
    },
  ];

  for (const rule of fixedRules) {
    const match = firstMatch(text, rule.pattern);
    if (match) {
      report(path, lineForOffset(text, match.index), rule.name);
    }
  }

  const lower = text.toLowerCase();
  for (const name of privateRepositoryNames) {
    const index = lower.indexOf(name.toLowerCase());
    if (index !== -1) {
      report(path, lineForOffset(text, index), "private repository metadata");
    }
  }
  // The shipped `--confidential` flag and OAuth's lowercase client type
  // (RFC 6749 §2.1) name a product concept, not a release marker. Only those
  // exact spellings are blanked, case-sensitively, before the marker scan.
  const blank = (match) => " ".repeat(match.length);
  const markerText = text
    .replace(new RegExp(`(?<![\\w-])--(?:\\[no-\\])?${internalMarkers[3]}(?![\\w-])`, "gu"), blank)
    .replace(new RegExp(`\\b${internalMarkers[3]} (?:app|client)s?\\b`, "gu"), blank)
    // Shipped product wording: the OAuth property and error code identifiers, the team setting
    // ("while a team is" plus the marker), and the plan pair ("Enterprise or"
    // plus the Internal plan and "only").
    .replace(new RegExp(`(?<=["\`_])${internalMarkers[3]}(?=["\`])`, "gu"), blank)
    .replace(new RegExp(`\\b${internalMarkers[3]} secret-backed\\b`, "gu"), blank)
    .replace(new RegExp(`\\bteam is ${internalMarkers[1]}\\b`, "gu"), blank)
    .replace(new RegExp(`\\bEnterprise or ${["Internal", "only"].join(" ")}\\b`, "gu"), blank)
    .toLowerCase();
  for (const marker of internalMarkers) {
    const index = markerText.indexOf(marker.toLowerCase());
    if (index !== -1) {
      report(path, lineForOffset(text, index), "internal-only marker");
    }
  }

  const assignmentPattern =
    /\b(?:api[_-]?key|access[_-]?token|client[_-]?secret|password)\b\s*[:=]\s*["']?([^\s"',}]{8,})/giu;
  for (const match of text.matchAll(assignmentPattern)) {
    const value = match[1] ?? "";
    const placeholder =
      value.startsWith("$") ||
      value.startsWith("<") ||
      value.startsWith("{") ||
      /^(?:your|example|placeholder|redacted|replace|x{4,}|\*{4,}|\.{3})/iu.test(value);
    if (!placeholder) {
      report(path, lineForOffset(text, match.index), "literal secret assignment");
    }
  }

  const uuidRanges = Array.from(
    text.matchAll(/\b[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}\b/giu),
    (match) => [match.index, match.index + match[0].length],
  );
  const shortHashPattern = /(?<![#\p{L}\p{N}_])[0-9a-f]{7,12}(?![\p{L}\p{N}_])/giu;
  // An Apple signing identity names its team ID in parentheses (the CLI's
  // `sf desktop build --sign` example); that is not a commit.
  const signingIdentityRanges = Array.from(
    text.matchAll(/Developer ID Application: [^"\n()]+\(([0-9A-Z]{10})\)/gu),
    (match) => [match.index, match.index + match[0].length],
  );
  for (const match of text.matchAll(shortHashPattern)) {
    const value = match[0];
    if (
      [...uuidRanges, ...signingIdentityRanges].some(
        ([start, end]) => match.index >= start && match.index < end,
      )
    ) {
      continue;
    }
    if (value.toLowerCase() !== "ed25519" && /[a-f]/iu.test(value)) {
      report(path, lineForOffset(text, match.index), "short commit hash");
    }
  }
};

let scannedFiles = 0;
for (const path of files) {
  const bytes = await readFile(path);
  let text;
  try {
    text = decoder.decode(bytes);
  } catch {
    continue;
  }
  scannedFiles += 1;
  scanText(path, text);
}

for (const path of symlinks) {
  const target = await readlink(path);
  if (target.startsWith("/") || /^[A-Za-z]:\\/u.test(target)) {
    report(path, 1, "absolute symlink target");
  }
  scanText(path, target);
}

if (violations.length > 0) {
  console.error(`Public-safety verification failed with ${violations.length} violation(s):`);
  for (const violation of violations.slice(0, 100)) {
    console.error(`- ${violation.path}:${violation.line} — ${violation.rule}`);
  }
  if (violations.length > 100) {
    console.error(`- …and ${violations.length - 100} more`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Public-safety verification passed: ${scannedFiles} text file(s) and ${symlinks.length} symlink(s) scanned.`,
  );
}

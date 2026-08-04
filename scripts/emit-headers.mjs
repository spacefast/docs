import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { deploymentBase } from "./redirect-rules.mjs";

const headersPath = path.join(path.resolve(process.cwd()), "dist", "_headers");
const corsRules = `${deploymentBase}/pagefind/*
  Access-Control-Allow-Origin: *
${deploymentBase}/*
  Access-Control-Allow-Origin: *
`;

function removeUnsupportedExtensionGlobs(source) {
  const unsupported = new Set([
    `${deploymentBase}/*.md`,
    `${deploymentBase}/*.mdx`,
    `${deploymentBase}/*.txt`,
  ]);
  const lines = source.split(/\r?\n/u);
  const kept = [];
  for (let index = 0; index < lines.length; index += 1) {
    if (!unsupported.has(lines[index])) {
      kept.push(lines[index]);
      continue;
    }
    while (/^\s/u.test(lines[index + 1] ?? "")) index += 1;
  }
  return kept.join("\n");
}

// Blume owns dist/_headers (Markdown charset, agent Link header, api-catalog
// media type). A public/_headers would shadow the whole file, so the Pagefind
// CORS rules — which let the consumer site merge this index and let the
// dashboard terminal read canonical Markdown cross-origin — are
// appended here instead of shipped from public/.
const current = removeUnsupportedExtensionGlobs(
  await readFile(headersPath, "utf8").catch(() => ""),
);
if (
  current.includes(`${deploymentBase}/pagefind/*`) &&
  current.includes(`${deploymentBase}/*\n  Access-Control-Allow-Origin: *`)
) {
  await writeFile(headersPath, current.endsWith("\n") ? current : `${current}\n`, "utf8");
  console.log("dist/_headers already carries valid docs CORS rules.");
} else {
  const separator = current.length > 0 && !current.endsWith("\n") ? "\n" : "";
  await writeFile(headersPath, `${current}${separator}${corsRules}`, "utf8");
  console.log("Appended the docs CORS rules to dist/_headers.");
}

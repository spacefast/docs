import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { deploymentBase } from "./redirect-rules.mjs";

const headersPath = path.join(path.resolve(process.cwd()), "dist", "_headers");
const corsRules = `${deploymentBase}/pagefind/*
  Access-Control-Allow-Origin: *
${deploymentBase}/*
  Access-Control-Allow-Origin: *
`;

// Spacefast header rules match whole path segments, so an extension glob like
// `/docs/*.md` does not compile. The content-type globs go: the platform
// already serves those types. The SVG sandbox rules widen to their directory,
// which holds only downloaded content images; the sandbox and nosniff headers
// are inert on an image an <img> embeds and keep an opened SVG from running.
const svgAssetGlob = `${deploymentBase}/blume-assets/*.svg`;
const svgAssetDirectory = `${deploymentBase}/blume-assets/*`;

function supportedHeaderRules(source) {
  const unsupported = new Set([
    `${deploymentBase}/*.md`,
    `${deploymentBase}/*.mdx`,
    `${deploymentBase}/*.txt`,
  ]);
  const lines = source.split(/\r?\n/u);
  const kept = [];
  const svgHeaders = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (unsupported.has(line) || line === svgAssetGlob) {
      while (/^\s/u.test(lines[index + 1] ?? "")) {
        index += 1;
        if (line === svgAssetGlob) svgHeaders.push(lines[index]);
      }
      continue;
    }
    kept.push(line);
  }
  if (svgHeaders.length > 0) {
    while (kept.at(-1) === "") kept.pop();
    kept.push(svgAssetDirectory, ...new Set(svgHeaders), "");
  }
  const invalid = kept.find((line) => !/^\s/u.test(line) && /\*[^/]/u.test(line));
  if (invalid) throw new Error(`dist/_headers has a rule the platform cannot match: ${invalid}`);
  return kept.join("\n");
}

// Blume owns dist/_headers (Markdown charset, agent Link header, api-catalog
// media type). A public/_headers would shadow the whole file, so the Pagefind
// CORS rules — which let the consumer site merge this index and let the
// dashboard terminal read canonical Markdown cross-origin — are
// appended here instead of shipped from public/.
const current = supportedHeaderRules(
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

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { deploymentBase } from "./redirect-rules.mjs";

const headersPath = path.join(path.resolve(process.cwd()), "dist", "_headers");
const corsRules = `${deploymentBase}/pagefind/*
  Access-Control-Allow-Origin: *
${deploymentBase}/*.md
  Access-Control-Allow-Origin: *
`;

// Blume owns dist/_headers (Markdown charset, agent Link header, api-catalog
// media type). A public/_headers would shadow the whole file, so the Pagefind
// CORS rules — which let the consumer site merge this index and let the
// dashboard terminal read canonical Markdown cross-origin — are
// appended here instead of shipped from public/.
const current = await readFile(headersPath, "utf8").catch(() => "");
if (
  current.includes(`${deploymentBase}/pagefind/*`) &&
  current.includes(`${deploymentBase}/*.md\n  Access-Control-Allow-Origin: *`)
) {
  console.log("dist/_headers already carries the docs CORS rules.");
} else {
  const separator = current.length > 0 && !current.endsWith("\n") ? "\n" : "";
  await writeFile(headersPath, `${current}${separator}${corsRules}`, "utf8");
  console.log("Appended the docs CORS rules to dist/_headers.");
}

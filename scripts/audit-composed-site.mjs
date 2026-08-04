import { readFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

import { websiteDependencyManifest, websiteOrigin } from "./website-dependencies.mjs";

const blumeCli = fileURLToPath(new URL("../node_modules/blume/bin/blume.mjs", import.meta.url));

function isComposedDependency(diagnostic, dependencyUrls) {
  if (diagnostic.code === "BLUME_AUDIT_SUBRESOURCE_MISSING") {
    return dependencyUrls.some(
      (url) => diagnostic.message === `Page references ${url}, which is not in the build.`,
    );
  }
  if (diagnostic.code === "BLUME_AUDIT_LINK_TO_BROKEN") {
    return dependencyUrls.some(
      (url) =>
        diagnostic.message.startsWith(`Link to ${url} resolves to `) &&
        diagnostic.message.endsWith(", which the build does not serve."),
    );
  }
  return false;
}

export function unexpectedAuditErrors(diagnostics, dependencies) {
  const dependencyUrls = dependencies.map((dependency) => `${websiteOrigin}${dependency}`);
  return diagnostics.filter(
    (diagnostic) =>
      diagnostic.severity === "error" && !isComposedDependency(diagnostic, dependencyUrls),
  );
}

async function runAudit() {
  const child = spawn(process.execPath, [blumeCli, "audit", "--json"], {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
  });
  let stdout = "";
  let stderr = "";
  child.stdout.setEncoding("utf8");
  child.stderr.setEncoding("utf8");
  child.stdout.on("data", (chunk) => (stdout += chunk));
  child.stderr.on("data", (chunk) => (stderr += chunk));
  const exitCode = await new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("close", resolve);
  });
  if (exitCode !== 0 && exitCode !== 1) {
    throw new Error(`blume audit exited ${exitCode}: ${stderr.trim()}`);
  }
  return JSON.parse(stdout);
}

async function main() {
  const dependencies = JSON.parse(
    await readFile(path.join(process.cwd(), "dist", websiteDependencyManifest), "utf8"),
  );
  const report = await runAudit();
  const unexpected = unexpectedAuditErrors(report.diagnostics, dependencies);
  if (unexpected.length > 0) {
    for (const diagnostic of unexpected.slice(0, 20)) {
      console.error(`${diagnostic.code} ${diagnostic.url ?? ""}: ${diagnostic.message}`);
    }
    if (unexpected.length > 20) console.error(`...and ${unexpected.length - 20} more errors.`);
    process.exitCode = 1;
    return;
  }
  const composed = report.diagnostics.filter(
    (diagnostic) =>
      diagnostic.severity === "error" &&
      isComposedDependency(
        diagnostic,
        dependencies.map((dependency) => `${websiteOrigin}${dependency}`),
      ),
  ).length;
  console.log(
    `Docs audit passed: ${report.audit.pages} pages; ${composed} findings belong to declared Website dependencies and will be verified during composition.`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}

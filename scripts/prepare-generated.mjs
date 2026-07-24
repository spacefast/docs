import { cp, lstat, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import { compileRedirectRules } from "./redirect-rules.mjs";

const root = path.resolve(process.cwd());
const markerName = ".spacefast-generated-copy";
const redirectsMarker = "# Generated from generated/redirects.json. Do not edit.\n";
const directHostingRules = [
  { from: "/docs", status: 200, to: "/" },
  { from: "/docs/*", status: 200, to: "/:splat" },
];
const trees = [
  { source: "generated/cli", target: "content/cli" },
  { source: "generated/errors", target: "content/errors" },
];

async function exists(value) {
  try {
    await lstat(value);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
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
      (await readFile(marker, "utf8").catch(() => null)) !==
        "spacefast-public-docs\n"
    ) {
      throw new Error(`refusing to replace unowned generated overlay: ${tree.target}`);
    }
    await rm(target, { recursive: true });
  }
  await cp(source, target, { recursive: true });
  await writeFile(marker, "spacefast-public-docs\n");
}

const redirectsTarget = path.join(root, "public/_redirects");
if (await exists(redirectsTarget)) {
  const current = await readFile(redirectsTarget, "utf8");
  if (!current.startsWith(redirectsMarker)) {
    throw new Error("refusing to replace unowned generated overlay: public/_redirects");
  }
}
const redirects = await readFile(
  path.join(root, "generated/redirects.json"),
  "utf8",
).then(JSON.parse);
const routingRules = [...compileRedirectRules(redirects), ...directHostingRules];
const staticRules = routingRules.filter(({ from }) => !from.includes("*")).length;
if (staticRules > 2_000 || routingRules.length > 2_100) {
  throw new Error(
    `Generated compatibility routes exceed Spacefast limits: ${staticRules} static, ${routingRules.length} total`,
  );
}
await writeFile(
  redirectsTarget,
  `${redirectsMarker}${routingRules
    .map(({ from, status, to }) => `${from} ${to} ${status}`)
    .join("\n")}\n`,
);

console.log(
  `Prepared generated CLI, error-reference, and ${routingRules.length} routing rules covering ${redirects.length} compatibility URLs.`,
);

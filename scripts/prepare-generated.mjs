import { cp, lstat, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd());
const markerName = ".spacefast-generated-copy";
const redirectsMarker = "# Generated from generated/redirects.json. Do not edit.\n";
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
await writeFile(
  redirectsTarget,
  `${redirectsMarker}${redirects
    .map(({ from, status, to }) => `${from} ${to} ${status}`)
    .join("\n")}\n`,
);

console.log(
  `Prepared generated CLI, error-reference, and ${redirects.length} redirect entries.`,
);

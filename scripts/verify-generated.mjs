import { createHash } from "node:crypto";
import { lstat, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd(), "generated");
const markerName = ".spacefast-generated-docs.json";
const expectedOwner = "spacefast-public-docs";
const expectedSchemaVersion = 1;

const sha256 = (value) => createHash("sha256").update(value).digest("hex");

async function filesUnder(directory, relative = "") {
  const entries = await readdir(path.join(directory, relative), {
    withFileTypes: true,
  });
  const files = [];
  for (const entry of entries.toSorted((left, right) => left.name.localeCompare(right.name))) {
    const child = path.join(relative, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`generated snapshot contains a symlink: ${child}`);
    }
    if (entry.isDirectory()) {
      files.push(...(await filesUnder(directory, child)));
    } else if (entry.isFile()) {
      files.push(child.split(path.sep).join("/"));
    }
  }
  return files;
}

const rootInfo = await lstat(root);
if (!rootInfo.isDirectory() || rootInfo.isSymbolicLink()) {
  throw new Error("generated/ must be a real directory");
}

const [marker, manifest] = await Promise.all([
  readFile(path.join(root, markerName), "utf8").then(JSON.parse),
  readFile(path.join(root, "manifest.json"), "utf8").then(JSON.parse),
]);
if (
  marker.owner !== expectedOwner ||
  marker.schemaVersion !== expectedSchemaVersion ||
  manifest.generator !== expectedOwner ||
  manifest.schemaVersion !== expectedSchemaVersion
) {
  throw new Error("generated docs ownership or schema does not match");
}

const actualFiles = (await filesUnder(root))
  .filter((file) => file !== markerName && file !== "manifest.json")
  .toSorted();
const expectedFiles = manifest.files.map((entry) => entry.path).toSorted();
if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
  throw new Error("generated docs manifest does not cover the complete snapshot");
}

for (const entry of manifest.files) {
  const content = await readFile(path.join(root, entry.path));
  if (content.byteLength !== entry.bytes || sha256(content) !== entry.sha256) {
    throw new Error(`generated docs artifact does not match manifest: ${entry.path}`);
  }
}

if (
  manifest.counts.apiOperations < 1 ||
  manifest.counts.platformOperations < 1 ||
  manifest.counts.errorCodes < 1 ||
  manifest.counts.redirects < 1 ||
  manifest.counts.setupPages < 1 ||
  (manifest.counts.changelogPackages ?? 0) < 1 ||
  (manifest.counts.changelogVersions ?? 0) < 1
) {
  throw new Error("generated docs manifest has an empty reference surface");
}
if (
  actualFiles.filter((file) => file.startsWith("changelog/packages/")).length <
  manifest.counts.changelogPackages + 1
) {
  throw new Error("generated package changelog reference is incomplete");
}
if (
  actualFiles.filter((file) => /^changelog\/v[^/]+\.md$/u.test(file)).length !==
  manifest.counts.changelogVersions
) {
  throw new Error("generated release changelog reference is incomplete");
}
if (
  actualFiles.filter((file) => /^errors\/[^/]+\.md$/u.test(file)).length !==
  manifest.counts.errorCodes + 1
) {
  throw new Error("generated error reference is incomplete");
}
if (
  actualFiles.filter((file) => /^setup\/[^/]+\.md$/u.test(file)).length !==
  manifest.counts.setupPages + 1
) {
  throw new Error("generated agent setup reference is incomplete");
}
const redirects = await readFile(path.join(root, "redirects.json"), "utf8").then(JSON.parse);
if (
  redirects.length !== manifest.counts.redirects ||
  redirects.some(
    (redirect) =>
      typeof redirect.from !== "string" ||
      !redirect.from.startsWith("/") ||
      typeof redirect.to !== "string" ||
      !redirect.to.startsWith("/") ||
      redirect.status !== 301,
  )
) {
  throw new Error("generated redirect compatibility map is incomplete");
}

console.log(
  `Generated references verified: ${manifest.files.length} artifacts, ${manifest.counts.apiOperations} API operations, ${manifest.counts.platformOperations} platform operations, ${manifest.counts.errorCodes} error codes, ${manifest.counts.changelogPackages} packages, ${manifest.counts.changelogVersions} releases, ${manifest.counts.redirects} redirects.`,
);

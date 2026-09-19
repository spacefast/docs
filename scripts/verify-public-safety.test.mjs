import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const verifier = fileURLToPath(new URL("./verify-public-safety.mjs", import.meta.url));

test("UUID schema sentinels are public while commit identifiers remain rejected", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "docs-safety-"));
  try {
    const fixture = path.join(directory, "schema.json");
    await writeFile(fixture, JSON.stringify({ pattern: "ffffffff-ffff-ffff-ffff-ffffffffffff" }));
    const allowed = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(allowed.status, 0, allowed.stderr);
    await writeFile(fixture, JSON.stringify({ revision: ["a1b2", "c3d"].join("") }));
    const rejected = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(rejected.status, 1);
    assert.match(rejected.stderr, /short commit hash/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

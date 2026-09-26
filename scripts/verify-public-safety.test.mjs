import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

test("UUID values do not hide an adjacent short commit hash", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "docs-safety-"));
  const script = fileURLToPath(new URL("./verify-public-safety.mjs", import.meta.url));
  const scan = () => spawnSync(process.execPath, [script], { cwd: directory, encoding: "utf8" });
  const uuid = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  try {
    await writeFile(path.join(directory, "example.md"), "ID: " + uuid + "\nAlgorithm: ed25519\n");
    const valid = scan();
    assert.equal(valid.status, 0, valid.stderr);
    await writeFile(
      path.join(directory, "example.md"),
      "ID: " + uuid + "\nCommit: " + ["cafe", "babe"].join("") + "\n",
    );
    const invalid = scan();
    assert.equal(invalid.status, 1);
    assert.match(invalid.stderr, /1 violation\(s\)/);
    assert.match(invalid.stderr, /example\.md:2 — short commit hash/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

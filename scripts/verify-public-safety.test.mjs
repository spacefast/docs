import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const verifier = fileURLToPath(new URL("./verify-public-safety.mjs", import.meta.url));

test("accepts UUID literals while rejecting a separate short commit hash", () => {
  const directory = mkdtempSync(join(tmpdir(), "docs-public-safety-"));
  try {
    const fixture = join(directory, "schema.json");
    const schema = {
      pattern:
        "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$",
    };
    writeFileSync(fixture, JSON.stringify(schema));
    const accepted = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(accepted.status, 0, accepted.stderr);
    assert.match(accepted.stdout, /Public-safety verification passed/u);

    writeFileSync(fixture, JSON.stringify({ ...schema, revision: ["abcd", "1234"].join("") }));
    const rejected = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(rejected.status, 1);
    assert.match(rejected.stderr, /1 violation\(s\)/u);
    assert.match(rejected.stderr, /short commit hash/u);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("accepts the OAuth client-type term while rejecting the same word as a marker", () => {
  const directory = mkdtempSync(join(tmpdir(), "docs-public-safety-"));
  try {
    const marker = ["confi", "dential"].join("");
    const fixture = join(directory, "reference.md");
    writeFileSync(
      fixture,
      `sf oauth-apps create [--${marker}]\n  --${marker}  Issue a client secret.\nRotate a ${marker} app's secret, as for any ${marker} client.\n`,
    );
    const accepted = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(accepted.status, 0, accepted.stderr);

    writeFileSync(fixture, `sf oauth-apps create [--${marker}]\n\n${marker.toUpperCase()}: roadmap\n`);
    const rejected = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(rejected.status, 1);
    assert.match(rejected.stderr, /reference\.md:3 — internal-only marker/u);

    // A heading can't borrow "app" from the next line to pass as the OAuth phrase.
    writeFileSync(fixture, `${marker.toUpperCase()}\nApp roadmap\n`);
    const split = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
    assert.equal(split.status, 1);
    assert.match(split.stderr, /reference\.md:1 — internal-only marker/u);

    // Only the OAuth word gets the "app"/"client" exemption; every other marker is still caught.
    for (const phrase of [["Internal", "only"], ["Do not", "distribute"]]) {
      writeFileSync(fixture, `${phrase.join(" ")} app\n${phrase.join(" ")} client\n--${phrase.join(" ").toLowerCase()}\n`);
      const other = spawnSync(process.execPath, [verifier], { cwd: directory, encoding: "utf8" });
      assert.equal(other.status, 1, `${phrase.join(" ")} must be reported`);
      assert.match(other.stderr, /reference\.md:1 — internal-only marker/u);
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { openapiProseForChecking, openapiProseScope } from "./openapi-prose-scope.mjs";

test("allows compatibility protocol terms only in compatibility API prose", () => {
  assert.equal(openapiProseScope("/paths/~1v0~1atomic-api~1logs~1site~1{site}/post/summary"), "compatibility");
  assert.equal(openapiProseScope("/components/securitySchemes/atomicApiKey/description"), "compatibility");
  assert.equal(openapiProseScope("/paths/~1v1~1spaces/get/description"), "public");
  const directory = mkdtempSync(join(tmpdir(), "docs-prose-scope-"));
  try {
    const publicFile = join(directory, "openapi-prose.md");
    const compatibilityFile = join(directory, "openapi-compatibility-prose.md");
    const prose = 'Get web server logs through the wp.cloud API. Default "asc".\n';
    writeFileSync(publicFile, openapiProseForChecking(prose, "/paths/~1v1~1spaces/get/description"));
    writeFileSync(compatibilityFile, openapiProseForChecking(prose, "/paths/~1v0~1atomic-api~1logs~1site~1{site}/post/description"));
    const config = fileURLToPath(new URL("../.vale.ini", import.meta.url));
    const result = spawnSync("vale", ["--config", config, "--no-exit", "--output=JSON", publicFile, compatibilityFile], { encoding: "utf8" });
    assert.equal(result.status, 0, result.stderr);
    const alerts = JSON.parse(result.stdout);
    assert.deepEqual(alerts[compatibilityFile] ?? [], []);
    assert.deepEqual(alerts[publicFile].map((alert) => alert.Check).sort(), ["Spacefast.Internals", "Spacefast.WpCloud"]);
    writeFileSync(compatibilityFile, openapiProseForChecking("Requests run through the runtime engine.\n", "/paths/~1v0~1atomic-api~1logs~1site~1{site}/post/description"));
    const unrelated = spawnSync("vale", ["--config", config, "--no-exit", "--output=JSON", compatibilityFile], { encoding: "utf8" });
    assert.equal(unrelated.status, 0, unrelated.stderr);
    assert.deepEqual(JSON.parse(unrelated.stdout)[compatibilityFile].map((alert) => alert.Check), ["Spacefast.Internals"]);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

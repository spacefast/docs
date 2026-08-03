import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { buildDocsCorpus, parseLlmsFull } from "./build-docs-corpus.mjs";

const fixture = `# Spacefast Docs

> Build and publish static sites with Spacefast.

# Quickstart
Source: https://docs.spacefast.com/quickstart

Publish a site in a few commands.

## Install

\`npm install\`

---

# REST API
Source: https://docs.spacefast.com/api/reference

Use the REST API to manage spaces and versions.
`;

test("turns Blume's agent-readable output into ranked corpus records", () => {
  const pages = parseLlmsFull(fixture);
  assert.deepEqual(
    pages.map(({ kind, path, tier }) => ({ kind, path, tier })),
    [
      { kind: "api", path: "/api/reference", tier: "reference" },
      { kind: "guide", path: "/quickstart", tier: "essential" },
    ],
  );
  assert.equal(pages[1].slug, "quickstart");
  assert.equal(pages[1].summary, "Publish a site in a few commands.");
  assert.match(pages[1].body, /## Install/u);
});

test("includes the Platform API in the unified developer corpus", () => {
  const pages = parseLlmsFull(`# Platform API
Source: https://docs.spacefast.com/platforms/api/reference

Tenant and customer operations.
`);
  assert.deepEqual(
    pages.map(({ path, tier }) => ({ path, tier })),
    [{ path: "/platforms/api/reference", tier: "full" }],
  );
});

test("writes a versioned corpus artifact", async () => {
  const directory = await mkdtemp(join(tmpdir(), "spacefast-docs-corpus-"));
  const input = join(directory, "llms-full.txt");
  const output = join(directory, "docs-corpus.json");
  await writeFile(input, fixture);
  const corpus = await buildDocsCorpus({ input, output, revision: "abc123" });
  const written = JSON.parse(await readFile(output, "utf8"));
  assert.equal(corpus.revision, "abc123");
  assert.equal(written.schemaVersion, 1);
  assert.equal(written.pages.length, 2);
});

import assert from "node:assert/strict";
import test from "node:test";
import { docsUrlPattern } from "./docs-urls.mjs";

test("docs URL rewriting matches Spacefast docs paths and nothing that merely contains /docs", () => {
  const text = [
    'href="/docs/cli"',
    "https://spacefast.com/docs/publish#claim",
    "(/docs)",
    String.raw`"line\n/docs/api"`,
    "https://docs.github.com/en/actions",
    "https://example.com/docs/x",
    "./docs-backup.json",
    "/docsearch",
  ].join(" ");
  assert.deepEqual(text.match(docsUrlPattern), ["/docs/cli", "https://spacefast.com/docs/publish#claim", "/docs", "/docs/api"]);
});

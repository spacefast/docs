#!/usr/bin/env node

// Compare the opening prose of existing authored pages against a Git baseline.
// This reports editing signals, not a reader-comprehension score.

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const baseline = process.argv[2] ?? "origin/main";

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

function lead(source) {
  const body = source.startsWith("---") ? source.split("---", 3)[2] : source;
  if (!body) throw new Error("Could not find page body");

  for (const block of body.trimStart().split(/\n\s*\n/)) {
    const paragraph = block.trim();
    if (!paragraph || /^(#|<|:::|```|\||- |1\. )/.test(paragraph)) continue;
    return paragraph.replace(/\s+/g, " ");
  }
  throw new Error("Could not find opening paragraph");
}

function words(source) {
  return (source.match(/[\p{L}\p{N}_]+(?:['’-][\p{L}\p{N}_]+)*/gu) ?? []).length;
}

const paths = git("diff", "--name-only", "--diff-filter=M", baseline, "--", "content")
  .trim()
  .split("\n")
  .filter((path) => path.endsWith(".mdx"));

const rows = paths.map((path) => {
  const before = lead(git("show", `${baseline}:${path}`));
  const after = lead(readFileSync(path, "utf8"));
  return { path, before, after, beforeWords: words(before), afterWords: words(after) };
});

const changed = rows.filter(({ before, after }) => before !== after);
const median = (numbers) => {
  const sorted = numbers.toSorted((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
};
const count = (predicate, list = changed) => list.filter(predicate).length;
const templated = (source) => /^(after this page|by the end of this page)/i.test(source);

console.log(`Baseline: ${baseline}`);
console.log(`Existing authored MDX pages changed: ${rows.length}`);
console.log(`Opening paragraphs changed: ${changed.length}`);
console.log(`Templated openings: ${count((row) => templated(row.before), rows)} → ${count((row) => templated(row.after), rows)}`);
console.log(`Opening paragraphs over 30 words: ${count((row) => row.beforeWords > 30)} → ${count((row) => row.afterWords > 30)}`);
console.log(`Median opening words: ${median(changed.map((row) => row.beforeWords))} → ${median(changed.map((row) => row.afterWords))}`);
console.log(`Shorter / same length / longer: ${count((row) => row.afterWords < row.beforeWords)} / ${count((row) => row.afterWords === row.beforeWords)} / ${count((row) => row.afterWords > row.beforeWords)}`);

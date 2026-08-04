import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const value = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(value)));
    if (entry.isFile() && /\.mdx?$/u.test(entry.name)) files.push(value);
  }
  return files;
}

const files = [path.join(root, "README.md"), ...(await markdownFiles(path.join(root, "content")))];
const failures = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(/^```(?:bash|sh|shell|zsh)\s*\n([\s\S]*?)^```\s*$/gmu)) {
    const body = match[1];
    const commandLines = body.split("\n").filter((line) => {
      const trimmed = line.trim();
      return trimmed && !line.startsWith(" ") && !line.startsWith("\t") && !trimmed.startsWith("#");
    });
    if (commandLines.length > 1) {
      const line = source.slice(0, match.index).split("\n").length;
      failures.push(
        `${path.relative(root, file)}:${line} contains ${commandLines.length} commands`,
      );
    }
  }
}

if (failures.length) {
  throw new Error(
    `Shell examples must contain one copyable command per fence:\n${failures.join("\n")}`,
  );
}

console.log(`Command example verification passed for ${files.length} Markdown files.`);

import { readdir } from "node:fs/promises";
import path from "node:path";

const GENERATED_ROUTES = ["/api/reference", "/changelog", "/cli/reference", "/errors"];
const GENERATED_DIRECTORIES = new Set([
  "content/(reference)/changelog",
  "content/(reference)/errors",
  "content/setup",
]);

function routeFromContentPath(relativePath) {
  const normalized = relativePath.split(path.sep).join("/");
  if (!/\.(?:md|mdx)$/u.test(normalized) || normalized === "_llms-preamble.md") {
    return undefined;
  }

  const parts = normalized
    .replace(/\.(?:md|mdx)$/u, "")
    .split("/")
    .filter((part) => !/^\(.+\)$/u.test(part));
  if (parts.at(-1) === "index") parts.pop();
  return parts.length === 0 ? "/" : `/${parts.join("/")}`;
}

async function authoredFiles(root, relative = "") {
  const repoRelative = path.posix.join("content", relative.split(path.sep).join("/"));
  if (GENERATED_DIRECTORIES.has(repoRelative)) return [];

  const directory = path.join(root, "content", relative);
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const child = path.join(relative, entry.name);
      if (entry.isDirectory()) return authoredFiles(root, child);
      if (entry.isFile()) return [child];
      return [];
    }),
  );
  return nested.flat();
}

export function routesFromSidebar(source) {
  const start = source.indexOf("sidebar:");
  const end = source.indexOf("openapi:", start);
  if (start < 0 || end < 0) {
    throw new Error("Could not locate the sidebar in blume.config.ts.");
  }
  const routes = new Set(
    [...source.slice(start, end).matchAll(/["'](\/[^"']*)["']/gu)].map((match) => match[1]),
  );
  if (routes.size === 0) {
    throw new Error("The blume.config.ts sidebar declares no routes.");
  }
  return routes;
}

export async function readSidebarRoutes(root = process.cwd()) {
  const routes = new Set(GENERATED_ROUTES);
  for (const file of await authoredFiles(root)) {
    const route = routeFromContentPath(file);
    if (route && route !== "/cli/reference") routes.add(route);
  }
  return routes;
}

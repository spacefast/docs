import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * The sidebar in blume.config.ts is this site's route manifest. Both the
 * llms.txt builder and the route verifier key off it, so they read it through
 * one function rather than each rolling their own parse and drifting apart.
 */
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
  return routesFromSidebar(await readFile(path.join(root, "blume.config.ts"), "utf8"));
}

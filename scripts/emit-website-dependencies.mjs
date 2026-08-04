import { writeFile } from "node:fs/promises";
import path from "node:path";

import { websiteDependencies, websiteDependencyManifest } from "./website-dependencies.mjs";

await writeFile(
  path.join(process.cwd(), "dist", websiteDependencyManifest),
  `${JSON.stringify(websiteDependencies, null, 2)}\n`,
);

console.log(`Declared ${websiteDependencies.length} Website-owned Docs dependencies.`);

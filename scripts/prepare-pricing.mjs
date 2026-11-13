import { mkdir, writeFile } from "node:fs/promises";
import { loadPricing } from "./pricing.mjs";
const pricing = await loadPricing();
await mkdir("content/_pricing", { recursive: true });
await writeFile("content/_pricing/document.json", JSON.stringify({ data: pricing }));
console.log(`Prepared pricing document revision ${pricing.revision}.`);

import { mkdir, writeFile } from "node:fs/promises";
import { loadPricing, pricingSnippets } from "./pricing.mjs";
const pricing = await loadPricing();
await mkdir("content/_pricing", { recursive: true });
await writeFile("content/_pricing/document.json", JSON.stringify({ data: pricing }));
for (const [name, text] of Object.entries(pricingSnippets(pricing))) await writeFile(`content/_pricing/${name}.md`, `${text}\n`);
console.log(`Prepared pricing document revision ${pricing.revision}.`);

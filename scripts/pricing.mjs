import { readFile } from "node:fs/promises";
import { z } from "zod";

// The docs read only the unclaimed-Space timing from GET /v1/pricing. Plans,
// prices and limits come from scripts/pricing-next.mjs. So the check covers
// just those numbers and lets the API add or change everything else.
const seconds = z.number().int().positive();
export const pricingDocumentSchema = z.object({
  revision: z.string(),
  anonymous: z.object({
    ttlSeconds: seconds,
    publishAbsoluteCapSeconds: seconds,
    claimPageExtensionSeconds: seconds,
    claimPageTotalExtensionSeconds: seconds,
    recoveryWindowSeconds: seconds,
  }),
});

export async function loadPricing({ fixture = process.env.SPACEFAST_PRICING_FIXTURE, origin = process.env.SPACEFAST_API_ORIGIN ?? "https://api.spacefast.com", fetcher = fetch } = {}) {
  const response = fixture
    ? JSON.parse(await readFile(fixture, "utf8"))
    : await fetcher(`${origin.replace(/\/$/u, "")}/v1/pricing`, { signal: AbortSignal.timeout(15_000) }).then(async (response) => {
      if (!response.ok) throw new Error(`Pricing request failed: HTTP ${response.status}`);
      return response.json();
    });
  return pricingDocumentSchema.parse(response.data);
}

const number = (value) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(value);
const duration = (seconds) => {
  if (seconds % 86400 === 0) return `${number(seconds / 86400)} days`;
  if (seconds % 3600 === 0) return `${number(seconds / 3600)} hours`;
  return `${Math.floor(seconds / 3600)} hours and ${Math.floor(seconds % 3600 / 60)} minutes`;
};

/** `{{anonymous-…}}` variables for the unclaimed-Space pages. */
export function pricingVariables(pricing) {
  const variables = {};
  for (const [key, value] of Object.entries(pricing.anonymous)) variables[`anonymous-${key}`] = duration(value);
  return variables;
}

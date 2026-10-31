import assert from "node:assert/strict";
import test from "node:test";
import { loadPricing, pricingVariables, pricingSnippets } from "./pricing.mjs";

test("pricing loads the public envelope and derives prices, pools, seats, and the worked bill", async () => {
  const pricing = await loadPricing({ fixture: new URL("../test/fixtures/pricing-document.json", import.meta.url) });
  const plus = pricing.plans.find((plan) => plan.code === "plus");
  const variables = pricingVariables(pricing);
  assert.equal(variables["plus-price"], `$${plus.monthlyPriceUsd}`);
  assert.equal(variables["plus-example-total"], `$${plus.monthlyPriceUsd + Math.max(0, 12 - plus.seats.included) * plus.seats.extraMonthlyUsd + Math.max(0, 20 - plus.usageCreditUsd)}`);
  const snippets = pricingSnippets(pricing);
  assert.match(snippets.usage, /shared compute pool/u);
  assert.match(snippets.usage, /shared storage pool/u);
  assert.match(snippets.limits, /storage Bytes/u);
  assert.match(variables["anonymous-ttlSeconds"], /hours and .* minutes/u);
  const changed = structuredClone(pricing);
  changed.plans.find((plan) => plan.code === "plus").monthlyPriceUsd += 2;
  assert.notEqual(pricingVariables(changed)["plus-example-total"], variables["plus-example-total"]);
});

test("pricing rejects failed requests and malformed public documents without a fallback", async () => {
  await assert.rejects(loadPricing({ fixture: "", fetcher: async () => new Response("unavailable", { status: 503 }) }), /HTTP 503/u);
  await assert.rejects(loadPricing({ fixture: "", fetcher: async () => Response.json({ data: { currency: "EUR" } }) }));
});

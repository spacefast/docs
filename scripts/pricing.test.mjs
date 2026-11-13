import assert from "node:assert/strict";
import test from "node:test";
import { loadPricing, pricingVariables } from "./pricing.mjs";

const fixture = new URL("../test/fixtures/pricing-document.json", import.meta.url);

test("pricing loads the public envelope and formats the unclaimed-Space timing", async () => {
  const pricing = await loadPricing({ fixture });
  const variables = pricingVariables(pricing);
  assert.match(variables["anonymous-ttlSeconds"], /hours and .* minutes/u);
  assert.match(variables["anonymous-publishAbsoluteCapSeconds"], /days$/u);
});

test("pricing accepts plans, meters and fields the API adds or changes later", async () => {
  const { data } = JSON.parse(await (await import("node:fs/promises")).readFile(fixture, "utf8"));
  const changed = { ...data, plans: [{ code: "business" }], usage: [], limits: { future: true } };
  const parsed = await loadPricing({ fixture: "", fetcher: async () => Response.json({ data: changed }) });
  assert.equal(parsed.anonymous.ttlSeconds, data.anonymous.ttlSeconds);
});

test("pricing rejects failed requests and documents without the unclaimed-Space timing", async () => {
  await assert.rejects(loadPricing({ fixture: "", fetcher: async () => new Response("unavailable", { status: 503 }) }), /HTTP 503/u);
  await assert.rejects(loadPricing({ fixture: "", fetcher: async () => Response.json({ data: { revision: "x" } }) }));
});

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

test("a single pricing row comes from the same data as the full table", async () => {
  const { pricingTable, pricingTableMarkdown } = await import("./pricing-next.mjs");
  const full = pricingTable("space").groups.flatMap(([, rows]) => rows).find((row) => row.label === "Compute memory per request");
  const one = pricingTable("space", "Compute memory per request");
  assert.deepEqual(one.groups[0][1].map((row) => row.values), [full.values]);
  assert.equal(one.columns.length, full.values.length);
  assert.match(pricingTableMarkdown("space", "Compute memory per request"), /^\| Item \|.*\n\| --- \|.*\n\| Compute memory per request \|/u);
  assert.throws(() => pricingTable("space", "No such row"), /0 rows/u);
});

test("plan variables quote the same cells as the pricing tables", async () => {
  const { planVariables, pricingTable, DATACENTERS } = await import("./pricing-next.mjs");
  const variables = planVariables();
  const members = pricingTable("team").groups.flatMap(([, rows]) => rows).find((row) => row.label === "Members");
  assert.equal(variables["plan-team-members-pro"], members.values[2]);
  const crons = pricingTable("space", "Crons | Advanced crons").groups[0][1];
  assert.deepEqual(crons.map((row) => row.label), ["Crons", "Advanced crons"]);
  assert.equal(variables["plan-space-crons-boost"], crons[0].values[4]);
  assert.equal(variables["plan-datacenters"], DATACENTERS);
  for (const [name, value] of Object.entries(variables)) assert.match(name, /^[\w-]+$/u, `${name} = ${value}`);
});

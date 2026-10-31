import { readFile } from "node:fs/promises";
import { z } from "zod";
import schema from "../schemas/pricing-document.schema.json" with { type: "json" };

export const pricingDocumentSchema = z.fromJSONSchema(schema);

export async function loadPricing({ fixture = process.env.SPACEFAST_PRICING_FIXTURE, origin = process.env.SPACEFAST_API_ORIGIN ?? "https://api.spacefast.com", fetcher = fetch } = {}) {
  const response = fixture
    ? JSON.parse(await readFile(fixture, "utf8"))
    : await fetcher(`${origin.replace(/\/$/u, "")}/v1/pricing`, { signal: AbortSignal.timeout(15_000) }).then(async (response) => {
      if (!response.ok) throw new Error(`Pricing request failed: HTTP ${response.status}`);
      return response.json();
    });
  return pricingDocumentSchema.parse(response.data);
}

const number = (value) => value === "unlimited" ? "Unlimited" : new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(value);
const usd = (value) => value === null ? "Custom" : `$${number(value)}`;
const table = (headers, rows) => [headers, headers.map(() => "---"), ...rows].map((row) => `| ${row.join(" | ")} |`).join("\n");
const duration = (seconds) => {
  if (seconds % 86400 === 0) return `${number(seconds / 86400)} days`;
  if (seconds % 3600 === 0) return `${number(seconds / 3600)} hours`;
  return `${Math.floor(seconds / 3600)} hours and ${Math.floor(seconds % 3600 / 60)} minutes`;
};
export function pricingVariables(pricing) {
  const plan = (code) => {
    const found = pricing.plans.find((plan) => plan.code === code);
    if (!found) throw new Error(`Pricing document is missing ${code}`);
    return found;
  };
  const variables = {};
  for (const item of pricing.plans) {
    const prefix = item.code;
    variables[`${prefix}-price`] = usd(item.monthlyPriceUsd);
    variables[`${prefix}-credit`] = usd(item.usageCreditUsd);
    variables[`${prefix}-seats`] = number(item.seats.included);
    variables[`${prefix}-extra-seat`] = usd(item.seats.extraMonthlyUsd);
    for (const [key, value] of Object.entries(item.limits)) variables[`${prefix}-${key}`] = number(value);
  }
  for (const key of ["ttlSeconds", "publishAbsoluteCapSeconds", "claimPageExtensionSeconds", "claimPageTotalExtensionSeconds", "recoveryWindowSeconds"]) variables[`anonymous-${key}`] = duration(pricing.anonymous[key]);
  const plus = plan("plus");
  if (typeof plus.seats.included !== "number" || plus.seats.extraMonthlyUsd === null || plus.monthlyPriceUsd === null) throw new Error("Plus must define seat billing for the worked example");
  const seatCost = Math.max(0, 12 - plus.seats.included) * plus.seats.extraMonthlyUsd;
  const overage = Math.max(0, 20 - plus.usageCreditUsd);
  variables["plus-example-seats"] = usd(seatCost);
  variables["plus-example-overage"] = usd(overage);
  variables["plus-example-total"] = usd(plus.monthlyPriceUsd + seatCost + overage);
  const go = plan("go");
  if (go.monthlyPriceUsd === null) throw new Error("Go must define a monthly price");
  variables["go-example-overage"] = usd(Math.max(0, 8 - go.usageCreditUsd));
  variables["go-example-total"] = usd(go.monthlyPriceUsd + Math.max(0, 8 - go.usageCreditUsd));
  return variables;
}

export function pricingSnippets(pricing) {
  return {
    plans: table(["Plan", "Per team, per month", "Monthly usage credit", "Editors"], pricing.plans.map((plan) => [plan.name, usd(plan.monthlyPriceUsd), usd(plan.usageCreditUsd), `${number(plan.seats.included)}${plan.seats.extraMonthlyUsd === null ? "" : `, then ${usd(plan.seats.extraMonthlyUsd)} per extra editor`}`])),
    limits: table(["Allowance", ...pricing.plans.map((plan) => plan.name)], Object.keys(pricing.plans[0].limits).map((key) => [key.replace(/([a-z])([A-Z])/gu, "$1 $2"), ...pricing.plans.map((plan) => `${number(plan.limits[key])}${key.endsWith("Hours") ? " hours" : key.endsWith("Bytes") ? " bytes" : ""}`)])),
    capabilities: table(["Feature", ...pricing.plans.map((plan) => plan.name)], Object.keys(pricing.plans[0].capabilities).map((key) => [key.replace(/([a-z])([A-Z])/gu, "$1 $2"), ...pricing.plans.map((plan) => plan.capabilities[key] ? "Included" : "Not included")])),
    usage: table(["Usage", "Free allowance", "Paid included", "Paid rate (USD)"], pricing.usage.map((row) => [row.label, row.freeIncluded === null ? "None" : `${number(row.freeIncluded)} ${row.unit} (${row.freePeriod}${row.freePool ? `, shared ${row.freePool} pool` : ""})`, `${number(row.paidIncluded)} ${row.unit}`, `${usd(row.paidRateUsd)} per ${row.unit}`])),
  };
}

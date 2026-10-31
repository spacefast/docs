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

const limitLabels = {
  storageBytes: ["Storage", "bytes"],
  teamMembers: ["Team members"],
  liveSpaces: ["Live Spaces"],
  customDomains: ["Custom domains"],
  auditLogRetentionHours: ["Audit log retention", "hours"],
  buildAccessLogRetentionHours: ["Build and access log retention", "hours"],
  buildsDeploysDaily: ["Builds and deploys per day"],
  shareLinksPerSpace: ["Share links per Space"],
  invitesPerSpace: ["Invites per Space"],
  inviteEmailsPerSpaceDaily: ["Invite emails per Space per day"],
  inviteEmailsPerAccountDaily: ["Invite emails per account per day"],
  pendingAccessRequestsPerSpace: ["Pending access requests per Space"],
};
const capabilityLabels = {
  externalProxy: "External API proxy",
  pagesTemplates: "Pages templates",
  hideSpacefastBranding: "Remove Spacefast branding",
  networkPolicies: "Network policies",
};
const periodLabels = { month: "per month", day: "per day", stored: "stored" };
const label = (labels, key) => {
  const found = labels[key];
  if (!found) throw new Error(`Pricing document has no docs label for ${key}`);
  return found;
};
const number = (value) => value === "unlimited" ? "Unlimited" : new Intl.NumberFormat("en-US", { maximumFractionDigits: 6 }).format(value);
const usd = (value) => value === null ? "Custom" : `$${new Intl.NumberFormat("en-US", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 6 }).format(value)}`;
const bytes = (value) => {
  for (const [size, unit] of [[1e12, "TB"], [1e9, "GB"], [1e6, "MB"]]) if (value >= size) return `${number(value / size)} ${unit}`;
  return `${number(value)} bytes`;
};
const plural = (count, unit) => count === 1 || /^(GB|GB-month|million)$/u.test(unit) ? unit : `${unit}s`;
const quantity = (count, unit) => `${number(count)} ${plural(count, unit)}`;
const limit = (key, value) => {
  if (value === "unlimited") return "Unlimited";
  const [, unit] = label(limitLabels, key);
  if (unit === "bytes") return bytes(value);
  if (unit === "hours") return duration(value * 3600);
  return number(value);
};
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
  if (typeof plus.seats.included !== "number" || plus.seats.extraMonthlyUsd === null || plus.monthlyPriceUsd === null || plus.usageCreditUsd === null) throw new Error("Plus must define seat billing for the worked example");
  const seatCost = Math.max(0, 12 - plus.seats.included) * plus.seats.extraMonthlyUsd;
  const overage = Math.max(0, 20 - plus.usageCreditUsd);
  variables["plus-example-seats"] = usd(seatCost);
  variables["plus-example-overage"] = usd(overage);
  variables["plus-example-total"] = usd(plus.monthlyPriceUsd + seatCost + overage);
  const go = plan("go");
  if (go.monthlyPriceUsd === null || go.usageCreditUsd === null) throw new Error("Go must define a monthly price and credit");
  variables["go-example-overage"] = usd(Math.max(0, 8 - go.usageCreditUsd));
  variables["go-example-total"] = usd(go.monthlyPriceUsd + Math.max(0, 8 - go.usageCreditUsd));
  return variables;
}

export function pricingSnippets(pricing) {
  return {
    plans: table(["Plan", "Per team, per month", "Monthly usage credit", "Editors"], pricing.plans.map((plan) => [plan.name, usd(plan.monthlyPriceUsd), usd(plan.usageCreditUsd), `${number(plan.seats.included)}${plan.seats.extraMonthlyUsd === null ? "" : `, then ${usd(plan.seats.extraMonthlyUsd)} per extra editor`}`])),
    limits: table(["Allowance", ...pricing.plans.map((plan) => plan.name)], Object.keys(pricing.plans[0].limits).map((key) => [label(limitLabels, key)[0], ...pricing.plans.map((plan) => limit(key, plan.limits[key]))])),
    capabilities: table(["Feature", ...pricing.plans.map((plan) => plan.name)], Object.keys(pricing.plans[0].capabilities).map((key) => [label(capabilityLabels, key), ...pricing.plans.map((plan) => plan.capabilities[key] ? "Included" : "Not included")])),
    usage: table(["Usage", "Free allowance", "Paid included", "Paid rate (USD)"], pricing.usage.map((row) => [row.label, row.freeIncluded === null ? "None" : `${quantity(row.freeIncluded, row.unit)} ${periodLabels[row.freePeriod]}${row.freePool ? `, shared ${row.freePool} pool` : ""}`, row.paidIncluded === 0 ? "None" : quantity(row.paidIncluded, row.unit), `${usd(row.paidRateUsd)} per ${row.unit}`])),
  };
}

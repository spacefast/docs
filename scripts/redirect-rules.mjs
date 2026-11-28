import { redirects as retiredRoutes } from "../redirects.ts";

import referenceAliases from "./reference-aliases.json" with { type: "json" };

export const deploymentBase = "/docs";
// Keep the agreed Docs ceiling; the platform counts host-specific exact rules
// and splats against the shared dynamic cap (Website reserves 16).
export const docsDynamicRuleLimit = 88;
const websiteDynamicRuleReserve = 16;
const platformDynamicRuleLimit = 100;
// The composed artifact shares the platform's 2,000 static and 2,100 total
// redirects with the Website, which currently declares 124 static redirects.
const websiteStaticRuleReserve = 124;
export const docsStaticRuleLimit = 2_000 - websiteStaticRuleReserve;
const docsTotalRuleLimit = 2_100 - websiteStaticRuleReserve - websiteDynamicRuleReserve;

const mountRewriteRules = [
  { from: deploymentBase, status: 200, to: "/" },
  { from: `${deploymentBase}/*`, status: 200, to: "/:splat" },
];

// /storage is a reserved Spacefast runtime path, so Blume must not emit a
// redirect directory under dist/storage/. Emit its HTTP redirect directly here.
const reservedPathRedirects = [
  { from: "/storage", status: 301, to: "/object-storage" },
];

// `route` is relative to the deployment base; a `#fragment` has no Markdown form.
function markdownRoute(route, extension) {
  const pathname = route.split("#")[0].replace(/(?<=.)\/$/u, "");
  return `${deploymentBase}${pathname === "/" ? "/index" : pathname}.${extension}`;
}

// Blume emits HTML meta-refresh stubs for retired Markdown URLs. Agents need
// an HTTP redirect instead of HTML at those URLs. Moved pages also need a rule,
// so each retired page gets a 301 to the replacement's Markdown file.
export const markdownTwinRules = [...retiredRoutes, ...reservedPathRedirects].map(({ from, to }) => ({
  from: markdownRoute(from, "md"),
  status: 301,
  to: markdownRoute(to, "md"),
}));

// Drop Partner API redirects and pre-launch OpenAPI alias permutations
// (/api/operations/*, /api/reference/operations/*, /api/reference/resources/*).
// Only canonical REST API operation renames under /api/reference/<tag>/<op> survive.
const DROPPED_PREFIXES = [
  "/partners/",
  "/partner-api",
  "/platform-api",
  "/platforms/api/reference/",
  "/api/operations",
  "/api/reference/operations",
  "/api/reference/resources",
];

const isDroppedCompatibilitySource = (from) =>
  DROPPED_PREFIXES.some((prefix) => from === prefix || from.startsWith(prefix.endsWith("/") ? prefix : `${prefix}/`));

// The platform counts splats and named segments alike as dynamic rules.
const isDynamic = ({ from }) => from.includes("*") || /\/:[a-z]/iu.test(from);

export function compileRedirectRules(redirects) {
  const bySource = new Map();
  for (const redirect of [...redirects, ...referenceAliases]) {
    if (isDroppedCompatibilitySource(redirect.from)) continue;
    bySource.set(redirect.from, {
      from: redirect.from,
      to: redirect.to,
      status: redirect.status,
    });
  }
  return [...bySource.values()].toSorted((left, right) => left.from.localeCompare(right.from));
}

// The published tree is flat (Astro emits pages at the dist root), but every
// public URL carries the deployment base for the composed Docs artifact. Browser
// redirects are prefixed so they fire under the mount; the trailing rewrites
// then map the remaining based URLs back onto the flat files.
export function buildRoutingRules(redirects) {
  return [
    ...[...retiredRoutes, ...reservedPathRedirects].map(({ from, to, status }) => {
      const [pathname, fragment] = to.split("#");
      return {
        from: `${deploymentBase}${from}`,
        status,
        to: `${deploymentBase}${pathname === "/" ? "/" : `${pathname}/`}${fragment ? `#${fragment}` : ""}`,
      };
    }),
    ...markdownTwinRules,
    ...compileRedirectRules(redirects).map(({ from, status, to }) => ({
      from: `${deploymentBase}${from}`,
      status,
      to: `${deploymentBase}${to.split("#")[0].replace(/\/$/u, "")}/${to.includes("#") ? `#${to.split("#")[1]}` : ""}`,
    })),
    ...mountRewriteRules,
  ];
}

export function verifyRoutingBudget(rules) {
  const dynamicRules = rules.filter(isDynamic).length;
  const redirectRules = rules.filter((rule) => rule.status !== 200);
  const staticRules = redirectRules.filter((rule) => !isDynamic(rule)).length;
  if (
    dynamicRules > docsDynamicRuleLimit ||
    staticRules > docsStaticRuleLimit ||
    redirectRules.length > docsTotalRuleLimit
  ) {
    throw new Error(
      `Generated compatibility routes exceed Docs limits: ${dynamicRules}/${docsDynamicRuleLimit} dynamic, ${staticRules}/${docsStaticRuleLimit} static, ${redirectRules.length}/${docsTotalRuleLimit} total`,
    );
  }
}

function applyRule(rule, source) {
  if (!rule.from.endsWith("*")) {
    return rule.from === source ? rule.to : null;
  }
  const prefix = rule.from.slice(0, -1);
  if (!source.startsWith(prefix)) return null;
  return rule.to.replace(":splat", source.slice(prefix.length));
}

export function resolveRedirect(source, rules, maximumHops = 5) {
  let current = source;
  const hops = [];
  for (let index = 0; index < maximumHops; index += 1) {
    const rule = rules.find((candidate) => applyRule(candidate, current) !== null);
    if (!rule) return { destination: current, hops };
    const destination = applyRule(rule, current);
    hops.push({ source: current, destination, status: rule.status });
    if (hops.some((hop, hopIndex) => hopIndex < hops.length - 1 && hop.source === destination)) {
      throw new Error(`Redirect loop while resolving ${source}`);
    }
    current = destination;
  }
  throw new Error(`Redirect chain exceeds ${maximumHops} hops: ${source}`);
}

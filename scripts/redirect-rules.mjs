import { redirects as retiredRoutes } from "../redirects.ts";

import referenceAliases from "./reference-aliases.json" with { type: "json" };

export const deploymentBase = "/docs";
// Keep the agreed Docs ceiling; compression also reserves the Website's full
// compiler count, including host-specific exact rules (16 rather than 12).
export const docsDynamicRuleLimit = 88;
const websiteDynamicRuleReserve = 16;
const platformDynamicRuleLimit = 100;

const mountRewriteRules = [
  { from: deploymentBase, status: 200, to: "/" },
  { from: `${deploymentBase}/*`, status: 200, to: "/:splat" },
];

const authoredRedirectRules = [
  {
    from: `${deploymentBase}/apps/zero`,
    status: 301,
    to: `${deploymentBase}/zero-runtime/`,
  },
  {
    from: `${deploymentBase}/zero`,
    status: 301,
    to: `${deploymentBase}/zero-runtime/`,
  },
  {
    from: `${deploymentBase}/storage`,
    status: 301,
    to: `${deploymentBase}/object-storage/`,
  },
];

// `route` is relative to the deployment base; a `#fragment` has no Markdown form.
function markdownRoute(route) {
  const pathname = route.split("#")[0].replace(/(?<=.)\/$/u, "");
  return `${deploymentBase}${pathname === "/" ? "/index" : pathname}.md`;
}

function unbased(route) {
  return route.slice(deploymentBase.length) || "/";
}

// Blume emits HTML meta-refresh stubs for retired Markdown URLs. Agents need
// an HTTP redirect instead of HTML at those URLs. Moved pages also need a rule,
// so both kinds get a 301 to the replacement's Markdown file.
export const markdownTwinRules = [
  ...authoredRedirectRules.map(({ from, to }) => ({ from: unbased(from), to: unbased(to) })),
  ...retiredRoutes,
].map(({ from, to }) => ({ from: markdownRoute(from), status: 301, to: markdownRoute(to) }));

const aliasFamilies = [
  {
    sourcePrefix: "/api/operations/",
    intermediatePrefix: "/api/reference/operations/",
  },
  {
    sourcePrefix: "/partner-api/operations/",
    intermediatePrefix: "/platforms/api/reference/operations/",
  },
  {
    sourcePrefix: "/partner-api/resources/",
    intermediatePrefix: "/platforms/api/reference/resources/",
  },
  {
    sourcePrefix: "/platform-api/operations/",
    intermediatePrefix: "/platforms/api/reference/operations/",
  },
  {
    sourcePrefix: "/platform-api/resources/",
    intermediatePrefix: "/platforms/api/reference/resources/",
  },
];

// The platform counts splats and named segments alike as dynamic rules.
const isDynamic = ({ from }) => from.includes("*") || /\/:[a-z]/iu.test(from);

function redirectKey(redirect) {
  return `${redirect.from}\0${redirect.to}\0${redirect.status}`;
}

// Legacy operation namespaces contain no content pages. Compress only a prefix
// whose complete published mapping preserves the suffix and destination.
function compressOperationAliases(rules) {
  let statics = rules.filter((rule) => !isDynamic(rule));
  const dynamic = rules.filter(isDynamic);
  const aliasDynamicRuleLimit = Math.min(docsDynamicRuleLimit, platformDynamicRuleLimit - websiteDynamicRuleReserve)
    - mountRewriteRules.filter(isDynamic).length;
  const candidates = new Map();
  for (const rule of statics) {
    if (!rule.from.includes("/operations/")) continue;
    const suffix = rule.from.split("/").at(-1);
    if (!rule.to.endsWith(`/${suffix}`)) continue;
    for (let length = rule.from.lastIndexOf("/") + 1; length < rule.from.length; length += 1) {
      const prefix = rule.from.slice(0, length);
      if (candidates.has(prefix)) continue;
      const target = rule.to.slice(0, rule.to.length - (rule.from.length - length));
      const matches = statics.filter(({ from }) => from.startsWith(prefix));
      if (matches.length > 1 && matches.every(({ from, to }) => to === target + from.slice(length))) candidates.set(prefix, { prefix, target, count: matches.length });
    }
  }
  for (const candidate of [...candidates.values()].sort((a, b) => b.count - a.count)) {
    if (dynamic.length >= aliasDynamicRuleLimit) break;
    const matches = statics.filter(({ from }) => from.startsWith(candidate.prefix));
    if (matches.length < 2) continue;
    statics = statics.filter(({ from }) => !from.startsWith(candidate.prefix));
    dynamic.push({ from: `${candidate.prefix}*`, to: `${candidate.target}:splat`, status: 301 });
  }
  return [...statics, ...dynamic.toSorted((a, b) => b.from.length - a.from.length)];
}

export function compileRedirectRules(redirects) {
  // Keep the established public URL when consuming the renamed partner snapshot.
  redirects = [...redirects, ...referenceAliases].map(({ from, to, status }) => ({
    from: from.replace("/partners/api/reference", "/platforms/api/reference"),
    to: to.replace("/partners/api/reference", "/platforms/api/reference"),
    status,
  }));
  const bySource = new Map(redirects.map((redirect) => [redirect.from, redirect]));
  const omitted = new Set();
  const dynamic = [];

  for (const family of aliasFamilies) {
    let covered = 0;
    for (const redirect of redirects) {
      if (!redirect.from.startsWith(family.sourcePrefix)) continue;
      const suffix = redirect.from.slice(family.sourcePrefix.length);
      if (!suffix) continue;
      const intermediate = bySource.get(`${family.intermediatePrefix}${suffix}`);
      if (
        !intermediate ||
        intermediate.status !== redirect.status ||
        intermediate.to !== redirect.to
      ) {
        throw new Error(
          `Cannot collapse compatibility redirect without an equivalent intermediate route: ${redirect.from}`,
        );
      }
      omitted.add(redirectKey(redirect));
      covered += 1;
    }
    if (covered > 0) {
      dynamic.push({
        from: `${family.sourcePrefix}*`,
        status: 301,
        to: `${family.intermediatePrefix}:splat`,
      });
    }
  }

  for (const root of ["/api/reference", "/platforms/api/reference"]) {
    for (const section of ["resources", "operations/tags"]) {
      const prefix = `${root}/${section}/`;
      let covered = 0;
      for (const redirect of redirects) {
        if (!redirect.from.startsWith(prefix)) continue;
        const tag = redirect.from.slice(prefix.length);
        if (!tag || tag.includes("/")) continue;
        if (redirect.to !== `${root}#${tag}` || redirect.status !== 301) {
          throw new Error(`Cannot collapse section redirect: ${redirect.from}`);
        }
        omitted.add(redirectKey(redirect));
        covered += 1;
      }
      if (covered > 0) {
        dynamic.push({ from: `${prefix}:tag`, status: 301, to: `${root}#:tag` });
      }
    }
  }

  return compressOperationAliases([
    ...redirects.filter((redirect) => !omitted.has(redirectKey(redirect))),
    ...dynamic,
    { from: "/partners/api/reference", status: 301, to: "/platforms/api/reference" },
    { from: "/partners/api/reference/*", status: 301, to: "/platforms/api/reference/:splat" },
    { from: "/platform-api", status: 301, to: "/platforms/api/reference" },
    { from: "/platform-api/*", status: 301, to: "/platforms/api/reference/:splat" },
  ].toSorted((left, right) => left.from.localeCompare(right.from)));
}

// The published tree is flat (Astro emits pages at the dist root), but every
// public URL carries the deployment base for the composed Docs artifact. Browser
// redirects are prefixed so they fire under the mount; the trailing rewrites
// then map the remaining based URLs back onto the flat files.
export function buildRoutingRules(redirects) {
  return [
    ...retiredRoutes.map(({ from, to, status }) => {
      const [pathname, fragment] = to.split("#");
      return { from: `${deploymentBase}${from}`, status, to: `${deploymentBase}${pathname === "/" ? "/" : `${pathname}/`}${fragment ? `#${fragment}` : ""}` };
    }),
    ...authoredRedirectRules,
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
  const staticRules = rules.length - dynamicRules;
  if (dynamicRules > docsDynamicRuleLimit || staticRules > 2_000 || rules.length > 2_100) {
    throw new Error(
      `Generated compatibility routes exceed Docs limits: ${dynamicRules}/${docsDynamicRuleLimit} dynamic, ${staticRules}/2000 static, ${rules.length}/2100 total`,
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

import referenceAliases from "./reference-aliases.json" with { type: "json" };

export const deploymentBase = "/docs";

const mountRewriteRules = [
  { from: deploymentBase, status: 200, to: "/" },
  { from: `${deploymentBase}/*`, status: 200, to: "/:splat" },
];

const authoredRedirectRules = [
  {
    from: `${deploymentBase}/apps/zero`,
    status: 301,
    to: `${deploymentBase}/zero`,
  },
];

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

function redirectKey(redirect) {
  return `${redirect.from}\0${redirect.to}\0${redirect.status}`;
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

  return [
    ...redirects.filter((redirect) => !omitted.has(redirectKey(redirect))),
    ...dynamic,
    { from: "/partners/api/reference", status: 301, to: "/platforms/api/reference" },
    { from: "/partners/api/reference/*", status: 301, to: "/platforms/api/reference/:splat" },
    { from: "/platform-api", status: 301, to: "/partner-api" },
    { from: "/platform-api/*", status: 301, to: "/partner-api/:splat" },
  ].toSorted((left, right) => left.from.localeCompare(right.from));
}

function applyRule(rule, source) {
  if (!rule.from.endsWith("*")) {
    return rule.from === source ? rule.to : null;
  }
  const prefix = rule.from.slice(0, -1);
  if (!source.startsWith(prefix)) return null;
  return rule.to.replace(":splat", source.slice(prefix.length));
}

// The published tree is flat (Astro emits pages at the dist root), but every
// public URL carries the deployment base for the composed Docs artifact. Browser
// redirects are prefixed so they fire under the mount; the trailing rewrites
// then map the remaining based URLs back onto the flat files.
export function buildRoutingRules(redirects) {
  return [
    ...authoredRedirectRules,
    ...compileRedirectRules(redirects).map(({ from, status, to }) => ({
      from: `${deploymentBase}${from}`,
      status,
      to: `${deploymentBase}${to}`,
    })),
    ...mountRewriteRules,
  ];
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

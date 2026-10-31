import { redirects as retiredPageRedirects } from "../redirects.ts";
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
    to: `${deploymentBase}/zero-runtime`,
  },
  {
    from: `${deploymentBase}/zero`,
    status: 301,
    to: `${deploymentBase}/zero-runtime`,
  },
  {
    from: `${deploymentBase}/storage`,
    status: 301,
    to: `${deploymentBase}/object-storage`,
  },
];

// `route` is relative to the deployment base; a `#fragment` has no Markdown form.
function markdownRoute(route) {
  const pathname = route.split("#")[0];
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
  ...retiredPageRedirects,
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

  return [
    ...redirects.filter((redirect) => !omitted.has(redirectKey(redirect))),
    ...dynamic,
    { from: "/partners/api/reference", status: 301, to: "/platforms/api/reference" },
    { from: "/partners/api/reference/*", status: 301, to: "/platforms/api/reference/:splat" },
    { from: "/platform-api", status: 301, to: "/partner-api" },
    { from: "/platform-api/*", status: 301, to: "/partner-api/:splat" },
  ].toSorted((left, right) => left.from.localeCompare(right.from));
}

// The published tree is flat (Astro emits pages at the dist root), but every
// public URL carries the deployment base for the composed Docs artifact. Browser
// redirects are prefixed so they fire under the mount; the trailing rewrites
// then map the remaining based URLs back onto the flat files.
export function buildRoutingRules(redirects) {
  return [
    ...authoredRedirectRules,
    ...markdownTwinRules,
    ...compileRedirectRules(redirects).map(({ from, status, to }) => ({
      from: `${deploymentBase}${from}`,
      status,
      to: `${deploymentBase}${to}`,
    })),
    ...mountRewriteRules,
  ];
}

---
title: Move to Spacefast
sidebar:
  label: Start here
description: Migration guidance for moving static sites and previews from other hosting providers to Spacefast.
---

Publish the existing static output directory to Spacefast. Keep root
`_redirects` and `_headers` files when the source host already uses them.

Publish the build output:

```bash
sf publish ./dist
```

Then attach the domain and wait for the DNS check:

```bash
sf domains add www.example.com --wait
```

## Choose a guide

- [Migrate from Vercel](/publishing/migrate/vercel)
- [Migrate from Netlify](/publishing/migrate/netlify)
- [Migrate from GitHub Pages](/publishing/migrate/github-pages)
- [Migrate from Cloudflare Pages](#cloudflare-pages)
- [Migrate from here.now](/publishing/migrate/here-now)

## Check capacity before the move

Open the target team's **Usage & billing** page in the dashboard. Compare its
storage, routing, domain, and publish limits with the site you move.

## What carries over

Spacefast hosts static output. `_redirects` and `_headers` files, SPA
fallbacks, custom 404 pages, and external proxies (plan-gated) carry over;
HTTPS certificates are automatic. If the source site needs request-time code,
compile that work away, keep it in an external service, or use [Apps](/apps).

You can publish built output from continuous integration (CI), an agent, or the
CLI, or [connect a Git repository](/publishing/git). Spacefast then builds on
every push, with branch previews, PR preview comments, and status checks.

For Next.js, start with the
[Next.js integration](/publishing/frameworks/nextjs).

## Migration safety

- Every publish is an immutable version. Roll back to any previous version
  with `sf rollback` or from the dashboard.
- Anonymous publishing works without an account. Claim the space within 6 hours
  to keep it.
- Download any space version's files with `sf spaces download`.

## Cloudflare Pages

Cloudflare Pages sites that build to static files republish directly. Keep
`_redirects` and `_headers` at the publish root: path redirects, splats,
placeholders, local `200` rewrites, and supported response headers carry over,
and omitted redirect statuses still default to `302`.

```text
# _redirects
/docs/* /guides/:splat 301
/app/* /index.html 200
```

```bash
sf publish ./dist
```

Cloudflare-specific notes:

- Replace Pages Functions, `_worker.js`, Workers bindings, Bulk Redirects, and
  `_routes.json` behavior with static output, external services, or application
  code; none of these run on Spacefast.
- For rewrites to public upstream APIs, use external `200`
  [proxy rules](/spaces/redirects#proxy-routes). Cloudflare-specific request
  mutation, bindings, and private credential injection do not carry over.
- Basic Auth in `_headers` and external proxies depend on the target team's
  routing entitlements; check them in the dashboard before relying on
  either.
- To keep building on push, [connect the repo](/publishing/git):
  `sf git connect --platform-preset cloudflare-pages` imports build settings
  from your existing Pages config.
- Remove platform-owned headers and Cloudflare cache headers from `_headers`;
  Spacefast rejects them with diagnostics.

## Cutover checklist

1. Build the current static artifact.
2. Publish to a test Spacefast space.
3. Check routing, headers, redirects, and image paths.
4. Add the production domain. Wait for the DNS and certificate checks.
5. Keep the previous host available until the new domain is healthy.

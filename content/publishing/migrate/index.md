---
title: Move to Spacefast
sidebar:
  label: Overview
description: Migration guidance for moving static sites and previews from other hosting providers to Spacefast.
---

Publish the existing static output directory to Spacefast. Keep root
`_redirects` and `_headers` files when the source host already uses them.

```bash
sf publish ./dist
```

```bash
sf domains add www.example.com --wait
```

## Choose a guide

- [Migrate from here.now](/publishing/migrate/here-now)
- [Migrate from Netlify](/publishing/migrate/netlify)
- [Migrate from Cloudflare Pages](/publishing/migrate/cloudflare-pages)
- [Migrate from GitHub Pages](/publishing/migrate/github-pages)
- [Migrate from Vercel](/publishing/migrate/vercel)

## Check capacity before the move

Open the target team's [limits](/account/billing). Compare its storage, routing,
domain, and publish capacity with the site you move. The dashboard and resolved
plan policy are authoritative.

## When Spacefast fits

Spacefast directly hosts static output: SPAs, documentation, marketing pages,
generated reports, and agent-published artifacts. It supports `_redirects` and
`_headers`, SPA fallbacks, custom 404 pages, entitled external proxies, and
automatic SSL. If the source site needs request-time code, compile that work
away, keep it in an external service, or use [Apps](/apps) when the team has
the needed runtime.

You can publish built output from CI, an agent, or the CLI. Or
[connect a Git repository](/publishing/git). Spacefast then builds on every
push, with branch previews, PR preview comments, and status checks.

For Next.js, start with the [Next.js integration](/publishing/frameworks/nextjs). It covers static export and image handling.

## Migration safety

- Every publish is an immutable version. Publishing never takes the live site
  down. Rollback to any previous version is one click.
- Anonymous publishing works without an account. Claim the space within 6 hours
  to keep it.
- Spaces export to a self-contained bundle.

## Cutover checklist

1. Build the current static artifact.
2. Publish to a test Spacefast space.
3. Check routing, headers, redirects, and image paths.
4. Add the production domain. Wait for the DNS and SSL checks.
5. Keep the previous host available until the new domain is healthy.

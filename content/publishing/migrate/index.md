---
title: Move to Spacefast
description: Migration guidance for moving static sites and previews from other hosting providers to Spacefast.
---

Publish the existing static output directory to Spacefast. Keep root `_redirects` and `_headers` files when the source host already uses them.

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

Open the target team's [limits](/account/limits) and compare its storage,
routing, domain, and publish capacity with the site you are moving. The
dashboard and resolved plan policy are authoritative.

## When Spacefast fits

Spacefast directly hosts static output: SPAs, documentation, marketing pages,
generated reports, and agent-published artifacts. It supports `_redirects` and
`_headers`, SPA fallbacks, custom 404 pages, entitled external proxies, and
automatic SSL. If the source site needs request-time code, either compile that
work away, keep it in an external service, or use [Apps](/apps) when the needed
runtime is available to the team.

You can publish built output from CI, an agent, or the CLI — or [connect a Git repository](/publishing/git) and Spacefast builds on every push, with branch previews, PR preview comments, and status checks.

For Next.js, start with the [Next.js integration](/publishing/frameworks/nextjs). It covers static export and image handling.

## Migration safety

- Every publish is an immutable version. Publishing never takes the live site down, and rollback to any previous version is one click.
- Anonymous publishing works without an account; claim the space within 6 hours to keep it.
- Spaces export to a self-contained bundle, so leaving Spacefast stays as straightforward as arriving.

## Cutover checklist

1. Build the current static artifact.
2. Publish to a test Spacefast space.
3. Verify routing, headers, redirects, and image paths.
4. Add the production domain and wait for DNS/SSL checks.
5. Keep the previous host available until the new domain is healthy.

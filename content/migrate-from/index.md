---
title: Overview
description: Migration guidance for moving static sites and previews from other hosting providers to Spacefast.
---

Publish the existing static output directory to Spacefast. Keep root `_redirects` and `_headers` files when the source host already uses them.

```bash
sf publish ./dist
sf domains add www.example.com --wait
```

## Choose a guide

- [Migrate from here.now](/migrate-from/here-now)
- [Migrate from Netlify](/migrate-from/netlify)
- [Migrate from Cloudflare Pages](/migrate-from/cloudflare-pages)
- [Migrate from GitHub Pages](/migrate-from/github-pages)
- [Migrate from Vercel](/migrate-from/vercel)

## What every plan includes

Every plan — Free ($0), Personal ($5/month), and Work ($15/month) — includes unlimited spaces and unlimited bandwidth. Traffic is never a pricing variable, before or after the move. Plans differ on storage (5 GB / 20 GB / 50 GB), rewrites + redirects rules (10 / 1,000 / unlimited), and `_headers` Basic Auth (not available on Free; available on Personal and Work).

## When Spacefast fits

Spacefast hosts static output: SPAs, documentation, marketing pages, generated reports, and agent-published artifacts. It supports `_redirects` and `_headers` files, SPA fallbacks, custom 404 pages, external `200` proxies on paid plans, and automatic SSL. There are no serverless or edge functions. Move request-time rendering and platform middleware to external services or compile them away.

You can publish built output from CI, an agent, or the CLI — or [connect a Git repository](/builds) and Spacefast builds on every push, with branch previews, PR preview comments, and status checks.

For Next.js, start with the [Next.js integration](/integrations/nextjs). It covers static export and image handling.

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

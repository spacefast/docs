---
title: Configuration
description: Configuration reference for space metadata, SPA behavior, and local Spacefast files.
---

Use CLI flags for one-off publishes. Add `sf.jsonc` at the publish root when configuration should travel with the files. It ships with each publish like any other file, compiles at finalize, and is never served — so config changes are version-atomic and roll back with versions. `sf init` scaffolds it, and the `$schema` pointer gives editors and agents autocomplete and validation.

```jsonc
{
  "$schema": "https://spacefast.com/schemas/sf.json",
  "space": "docs", // optional space link: slug or spc_ id
  "index": "index.html", // or false to disable index resolution
  "fallback": "/index.html", // SPA fallback; or { "path": "/404.html", "status": 404 }
  "cleanUrls": true, // serve about.html at /about; defaults off when an SPA fallback is set
  "listing": false,
  "meta": {
    "title": "Product docs",
    "description": "Static docs hosted on Spacefast",
    "image": "/og.png",
  },
  "theme": {
    "accent": "#ff603d",
    "background": "#faf9f7",
    "font": "Inter, system-ui, sans-serif",
    "logo": "/logo.svg",
    "name": "Product docs",
  },
}
```

Routing never lives in `sf.jsonc`. Redirects, rewrites, proxies, and headers stay exclusively in [`_redirects`](/redirects) and [`_headers`](/headers), so there is exactly one place to define each concern.

## Mode and SPA

`mode` is `website` or `files`. Website mode serves `index.html` as the homepage when it is present. `--spa auto` enables SPA fallback when the publish looks like a built client app, includes a root `index.html`, and does not include `_redirects`. In `sf.jsonc`, SPA fallback is `"fallback": "/index.html"`.

## Clean URLs

`cleanUrls` serves flat `.html` files at their extensionless URLs: `/about` serves `about.html` when no file or directory index matches first. The default is smart — on for plain static sites (including sites with a 404-status fallback page), off when a 200-status SPA fallback is configured, because the SPA owns its extensionless routes. Set `"cleanUrls": true` or `false` explicitly to override the default either way; the setting compiles at finalize and rolls back with versions like every other `sf.jsonc` key.

For Vite spaces, the Spacefast Vite plugin is optional. It gives local dev parity for `_redirects` and `_headers`, can generate routing files from `vite.config.ts`, and validates static-site builds. The platform still accepts plain build output without code changes. See [Vite and TanStack Start](/integrations/vite).

## Metadata

`meta.title`, `meta.description`, and `meta.image` control listing, preview, and social metadata. `theme` controls the designed visitor pages. See [Pages](/pages) for layouts, complete template takeovers, and the `sf-*` vocabulary.

## Access rules

Commit `access.rules` to allow, deny, or require sign-in by path, identity, IP range, or country. The rules compile at publish and roll back with versions; the shape and examples live in [Passwords & access](/access).

```jsonc
{
  "access": {
    "rules": [{ "match": { "country": "RU" }, "effect": "deny" }],
  },
}
```

## Password protection

Passwords are managed with `sf password set` and `sf password clear`, not in `sf.jsonc`. See [Passwords & access](/access).

```bash
sf spaces update --mode website --spa true
printf '%s\n' "$PASSWORD" | sf password set --stdin
sf password clear
```

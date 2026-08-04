---
title: Astro
description: Use @spacefast/astro for local routing parity, validation, and _redirects/_headers in the build output.
---

Spacefast publishes ordinary Astro static output without a framework-specific
host adapter. The optional `@spacefast/astro` integration mirrors
[`@spacefast/vite-plugin`](/publishing/frameworks/vite): it validates `_redirects` /
`_headers`, serves them in dev, and emits them into the build output.

## Install

```bash
npm install -D @spacefast/astro
```

Pin the release you review. The docs pass was checked against `@spacefast/astro`
`0.0.13`.

## Usage

```ts
import { defineConfig } from "astro/config";
import spacefastAstro from "@spacefast/astro";

export default defineConfig({
  integrations: [
    spacefastAstro({
      mode: "static",
      redirects: ["/old /new 301"],
      headers: "/*\n  x-frame-options: DENY",
    }),
  ],
});
```

The integration is optional. A default Astro static build that already emits
HTML (and any `_redirects` / `_headers` you place in the project or `public/`
directory) can be published with `sf publish dist` without changing
`astro.config`.

## What it does

- Reads `_redirects` and `_headers` from the project root, Astro `publicDir`,
  and an optional `publishDir`.
- Accepts inline `redirects` and `headers` in the integration options.
- Applies Spacefast redirects, rewrites, proxy rules, and supported response
  headers in the Astro / Vite dev server.
- Writes merged `_redirects` and `_headers` into the build output.
- Validates routing compile diagnostics (`failOnRoutingError` defaults to
  `true`).

## Modes

Use `mode: "static"` (default) for prerendered or ordinary static sites.

Use `mode: "spa"` when you need an index fallback written for client-rendered
routes — same idea as the Vite plugin's SPA mode.

## Publish

```bash
sf publish dist
```

Or let [builds](/publishing/git) detect the Astro project. Inspect routing before
upload:

```bash
sf publish --dry-run
```

```bash
sf routing inspect --routing dist --url /docs
```

## Related

- [Vite](/publishing/frameworks/vite) — same routing options for Vite / TanStack Start.
- [Redirects](/spaces/redirects) and [Headers](/spaces/headers) — file conventions.
- [Publishing](/publishing) — upload and version flow.

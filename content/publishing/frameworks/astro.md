---
title: Astro
description: Use @spacefast/astro for local routing parity, validation, and _redirects/_headers in the build output.
---

Spacefast publishes ordinary Astro static output without a framework-specific
host adapter: build, then `sf publish dist`. Any `_redirects` / `_headers`
files you place in the project or `public/` directory ship with that build, no
config changes needed. The optional `@spacefast/astro` integration mirrors
[`@spacefast/vite-plugin`](/publishing/frameworks/vite): it validates those
files, serves the resulting redirects, rewrites, proxy rules, and response
headers in the dev server, and emits the merged files into the build output.

## Install the integration

```bash
npm install -D @spacefast/astro
```

## Add it to astro.config

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

The integration reads `_redirects` and `_headers` from the project root, the
Astro `publicDir`, and an optional `publishDir`, then merges in the inline
`redirects` and `headers` options. Routing compile errors fail the build
unless you set `failOnRoutingError: false`.

Keep `mode: "static"` (the default) for prerendered or ordinary static sites.
Use `mode: "spa"` when client-rendered routes need an index fallback, the same
behavior as the [Vite plugin](/publishing/frameworks/vite)'s SPA mode.

## Publish and inspect

```bash
sf publish dist
```

Or let [Git builds](/publishing/git) detect the Astro project. Before upload,
confirm the declared redirect matches:

```bash
sf routing inspect --routing dist --url /old
```

For `sf publish --dry-run` output and the full list of rule sources, see
[the Vite page](/publishing/frameworks/vite).

## Redirect and header file conventions

See [Redirects](/spaces/redirects) and [Headers](/spaces/headers) for the file
syntax.

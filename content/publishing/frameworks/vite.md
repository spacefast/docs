---
title: Vite
description: How to use Vite, TanStack Start, and optional Spacefast local routing helpers.
---

Spacefast publishes plain Vite and TanStack Start static output without
framework-specific packages. Use `sf.jsonc`, `_redirects`, and `_headers` for
publish behavior. The optional Spacefast Vite plugin is only for local routing
parity and build validation. For Astro, see
[`@spacefast/astro`](/publishing/frameworks/astro). It has the same routing
options in an Astro integration shape.

## Plain Vite

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { spacefast } from "@spacefast/vite-plugin";

export default defineConfig({
  plugins: [react(), spacefast({ mode: "static" })],
});
```

The plugin is optional. A default Vite build emits `dist/index.html` plus hashed
files in `dist/assets`. `sf publish dist` works without changing
`vite.config.ts`.

## TanStack Start Static Site

```ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        failOnError: true,
      },
      spa: {
        enabled: false,
      },
    }),
    react(),
  ],
});
```

This is the right model for marketing pages, docs, and blogs. TanStack can still build an internal server bundle for prerendering. The published Spacefast output must be static files.

## TanStack Start SPA

```ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        failOnError: false,
      },
      spa: {
        enabled: true,
      },
    }),
    react(),
  ],
});
```

TanStack Start emits its SPA shell as `dist/client/_shell.html`. It can also emit prerendered route files such as `index.html`. Spacefast auto-detects `_shell.html` as the fallback on direct publishes. In repository builds, make that explicit:

```jsonc
{
  "fallback": "/_shell.html",
  "build": {
    "buildCommand": "npm run build",
    "outputDirectory": "dist/client",
  },
}
```

## Rule Sources

You can define routing in `sf.jsonc`, root `_redirects` and `_headers`, `public/_redirects` and `public/_headers`, or a configured publish directory. Spacefast merges those inputs at finalize.

## Build Summary

`sf publish --dry-run` prints the detected files, SPA fallback, and routing diagnostics before anything uploads.

## Inspect Routing Locally

After a build, inspect the generated output:

```bash
sf routing inspect --routing dist --url /dashboard
```

The command prints compiled rule counts, diagnostics, and match results for each URL.

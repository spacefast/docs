---
title: Vite
description: Publish plain Vite and TanStack Start output, with the optional Spacefast plugin for local routing parity.
---

Spacefast publishes plain Vite and TanStack Start static output without
framework-specific packages. The optional Spacefast Vite plugin exists only
for local routing parity and build validation. For Astro, use
[`@spacefast/astro`](/guides/frameworks/astro) instead.

## Plain Vite

A default Vite build emits `dist/index.html` plus hashed files in
`dist/assets`. Publish it without changing `vite.config.ts`:

```bash
sf publish dist
```

When you want `_redirects` and `_headers` served in the dev server and
validated at build time, add `@spacefast/vite-plugin`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { spacefast } from "@spacefast/vite-plugin";

export default defineConfig({
  plugins: [react(), spacefast({ mode: "static" })],
});
```

## TanStack Start static site

When you know every route at build time, prerender them all.

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

TanStack Start can still build an internal server bundle for prerendering; Spacefast
publishes only the static files.

## TanStack Start SPA

When routes render on the client, enable the SPA shell.

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

TanStack Start emits its SPA shell as `dist/client/_shell.html`, plus any
prerendered route files such as `index.html`. Spacefast auto-detects
`_shell.html` as the fallback on direct publishes. In repository builds, set
the fallback explicitly:

```jsonc
{
  "fallback": "/_shell.html",
  "build": {
    "buildCommand": "npm run build",
    "outputDirectory": "dist/client",
  },
}
```

## Inspect routing locally

You can define routing in `sf.jsonc`, root `_redirects` and `_headers`,
`public/_redirects` and `public/_headers`, or a configured publish directory.
Spacefast merges those inputs at finalize, and `sf publish --dry-run` prints
the detected files, SPA fallback, and routing diagnostics before anything
uploads.

After a TanStack SPA build, point the inspector at the configured output
directory:

```bash
sf routing inspect --routing dist/client --url /dashboard
```

For a plain Vite build, use `--routing dist`.

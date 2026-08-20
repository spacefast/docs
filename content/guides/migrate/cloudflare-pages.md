---
title: Cloudflare Pages
description: Move a static site from Cloudflare Pages to Spacefast.
---

Cloudflare Pages sites that build to static files republish directly. Keep
`_redirects` and `_headers` at the publish root: Spacefast reads the same
convention files, so your routing moves with the output. Before you rely on
gated routing features, check the target team's
[entitlements](/guides/migrate#check-capacity-and-entitlements).

```text
# _redirects
/docs/* /guides/:splat 301
/app/* /index.html 200
```

```bash
sf publish ./dist
```

## Migration checklist

- Publish the directory named by `pages_build_output_dir`, or
  [connect the repository](/publish/git) and Spacefast runs the build on every
  push. `sf git connect --platform-preset cloudflare-pages` imports build
  settings from your existing Pages config.
- Check that `_redirects` and `_headers` are in the build output, not only in
  the source tree.
- Recreate Pages environment variables and secrets in the system that builds
  your Spacefast artifact. Wrangler `vars` do not transfer.
- Publish to a test space first.

## What carries over

- Root `_redirects` and `_headers` files.
- Path redirects, splats, placeholders, local `200` rewrites, and supported
  response headers. Omitted redirect statuses still default to `302`, and the
  `301`, `302`, `303`, `307`, and `308` statuses all carry over.
- Header rules scoped to a path, and header removal with `! `.
- Custom 404 pages and single-page app fallbacks.
- Static framework output from Astro, Eleventy, Hugo, Vite, and similar build
  tools when the generated files need no Cloudflare runtime.

## What Spacefast reads from your Wrangler config

When Spacefast runs the build, it reads `wrangler.toml`, `wrangler.json`, or
`wrangler.jsonc` and sets the platform preset to `cloudflare-pages` on its own.
Passing `--platform-preset cloudflare-pages` is optional when one of those files
is present.

| Wrangler key | Becomes |
| --- | --- |
| `command`, or `build.command` | The build command, ahead of package-script detection |
| `assets.directory`, or `pages_build_output_dir` | The output directory |

Publishing a directory you built yourself skips this entirely. `sf publish ./dist`
uploads the output as-is and reads no Wrangler config.

## What to change

- Expect `.html` URLs to change shape. Cloudflare Pages redirects them to their
  extensionless form for you. Spacefast serves the path you publish, so turn on
  [clean URLs](/serve/settings) if you depend on that.
- Move CDN cache headers out of `_headers`. `CDN-Cache-Control`,
  `Cloudflare-CDN-Cache-Control`, and `Surrogate-Control` fail the publish with
  `header_cdn_cache_unsupported`, because they carry no Spacefast semantics.
- Plain `Cache-Control` still applies to browser responses, but Spacefast manages
  edge caching itself, so a `Cache-Control` rule reports
  `header_cache_control_platform_managed` as a warning. See
  [response headers](/serve/headers).
- Drop headers the platform owns. `Set-Cookie`, `Content-Encoding`,
  `Content-Length`, and the transport headers fail the publish with
  `header_name_unsupported`.
- Spacefast rejects `Basic-Auth` in `_headers` on every plan and fails the
  publish with `header_basic_auth_unsupported`. Use
  [Spacefast sharing](/share) instead.
- For rewrites to public upstream APIs, use external `200`
  [proxy rules](/serve/redirects#proxy-routes). Cloudflare serves relative
  rewrites only, so these are new rules to write rather than rules to move.
  Cloudflare-specific request mutation, bindings, and private credential
  injection do not carry over.

## What does not run on Spacefast

Spacefast does not run Cloudflare's platform runtime. Pages Functions,
`_worker.js`, Bulk Redirects, and `_routes.json` behavior have no equivalent.
Audit your `functions/` directory and replace those routes with static output, an
external service, or [Functions](/functions) before you publish.

When Spacefast runs the build, Wrangler bindings stop it before it starts:
`kv_namespaces`, `r2_buckets`, `d1_databases`, `durable_objects`, `services`,
`queues`, and `vars`. Note that `vars` counts here too, so plain build-time
values need recreating in your build settings.

Also refused, though a Pages project rarely sets them: `main`, and the
`assets.run_worker_first` and `assets.not_found_handling` asset-routing keys.

Remove them, or pass `--allow-unsupported-platform-features` to publish knowing
those features do not ship. A Wrangler file that only names the project and its
output directory reports no blockers.

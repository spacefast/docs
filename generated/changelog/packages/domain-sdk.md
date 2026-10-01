---
title: "@spacefast/domain-sdk"
description: "Release history for @spacefast/domain-sdk on npm."
---

Published as [`@spacefast/domain-sdk`](https://www.npmjs.com/package/@spacefast/domain-sdk) on npm.

## 0.5.0

#### Minor Changes

- Publish `@spacefast/domain-sdk`, the Spacefast provider for `domain-sdk`. A product that lets its customers bring a domain can now drive Spacefast through the same typed client it already uses for Vercel, Cloudflare, or Netlify: `add`, `get`, `list`, `verify`, and `remove` over the custom domains on one Space.

  An apex and its `www` twin are one Spacefast attachment, so either spelling resolves to the same domain and each answer reports the hostname that was asked for. The Space's own `*.view.fast` hostname stays hidden, `add()` is idempotent across a concurrent attach, and record and certificate state come from the Space's live diagnostics — reported as `unknown` when those cannot be read, rather than claiming something was observed.

---
title: "@spacefast/builders"
description: "Release history for @spacefast/builders on npm."
---

Published as [`@spacefast/builders`](https://www.npmjs.com/package/@spacefast/builders) on npm.

## 0.10.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.10.0
  - @spacefast/build-output@0.10.0

## 0.9.0

#### Patch Changes

- Keep route discovery proportional to source size when block comments are incomplete.
- Keep unrelated prerenders static when Next.js config rules combine a basePath with i18n. Redirects and beforeFiles rewrites now run before public and framework static assets via worker-first dispatch. Public-file inventory resolves conditional-rule fallthrough and literal or parametric rewrite destinations, including URL-encoded filenames and serving aliases, without allowing asset reads to shadow extracted-page drafts or RSC rendering. Sources whose asset paths cannot be represented safely retain static-first routing and emit a build note. The worker's private asset lookup list is independent of the origin's dispatch-pattern count and length limits. Escaped literal sources are recognized, and oversized origin routing patterns safely widen instead of failing publish. Builds and publishes of Next.js static exports warn when next.config redirects, rewrites, or headers are ignored and point to public/\_redirects and public/\_headers instead.

  Parametric public-asset rewrite prefixes preserve configured percent-escape casing. Capture layouts whose complete URI spelling cannot be reconstructed safely retain static-first routing.

- Resolve Functions dependencies through declared package-manager workspaces while keeping symlink targets inside the workspace.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.9.0
  - @spacefast/build-output@0.9.0

## 0.8.1

#### Patch Changes

- @spacefast/build-output@0.8.1
  - @spacefast/common@0.8.1

## 0.8.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0
  - @spacefast/build-output@0.8.0

## 0.7.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.7.0
  - @spacefast/build-output@0.7.0

## 0.6.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.6.1
  - @spacefast/build-output@0.6.1

## 0.6.0

#### Patch Changes

- Publish assets-only Wrangler projects that set `assets.not_found_handling`. `single-page-application` becomes the `/index.html` fallback in the generated `sf.jsonc`, with clean URLs kept on unless `assets.html_handling` is `none`; `404-page` and `none` keep Spacefast's default 404 handling. Workers with a `main` entry still report the setting as unsupported.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.6.0
  - @spacefast/build-output@0.6.0

## 0.5.1

#### Patch Changes

- @spacefast/common@0.5.1

## 0.5.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.5.0
- Detect Worker entries and compatibility settings from Wrangler JSON, JSONC, and TOML configs. Preserve JSONC strings and trailing commas. Explain that D1 SQLite queries and migrations cannot use Spacefast's MySQL binding unchanged.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0

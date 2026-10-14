---
title: "@spacefast/builders"
description: "Release history for @spacefast/builders on npm."
---

Published as [`@spacefast/builders`](https://www.npmjs.com/package/@spacefast/builders) on npm.

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

---
title: Publish a site
description: How publishing works in Spacefast, including dashboard Drop, CLI publishes, immutable versions, and updates.
---

Publish a directory or a single file. A changed-content publish creates an
immutable version with its own URL. The live URL moves to it — typically in
under ten seconds after the upload completes. Publishing content identical to
the current version is a no-op. Earlier versions stay available for rollback.

Directory publishes preserve relative paths. They can include `_redirects`,
`_headers`, and `sf.jsonc`. Spacefast serves static files only. Uploaded
server-side code never executes. The CLI and dashboard warn you early about
files that the runtime safety policy blocks.

## Dashboard Drop

The fastest path for humans is the dashboard uploader (Drop) on
[spacefast.com](https://spacefast.com) or inside a space on
`my.spacefast.com/<team>/<space>`. Drag a folder, a zip archive, or a
standalone `index.html` onto the upload box and publish — the
[quickstart](/getting-started/quickstart) walks through it. Later updates on a
claimed space use the same Drop on that space's page.

Folders and standalone files resume interrupted uploads. Spacefast expands zip
archives before it publishes them. Put `index.html` at the archive root unless
you want a file listing.

Drop does not need a CLI install. Prefer the [CLI](/cli) when you want
incremental uploads, `--json` receipts, CI, or dry-runs.

## Folder vs zip vs CLI

| Path                | Best for                                         |
| ------------------- | ------------------------------------------------ |
| Dashboard Drop      | First publish, designers, quick zip/`index.html` |
| `sf publish ./dist` | Local projects, agents, incremental updates      |
| `POST /v1/publish`  | One-shot HTTP from scripts — see [API](/api)     |

```bash
sf publish ./dist
```

```bash
sf publish ./dist --space docs --json
```

```bash
sf publish ./dist --dry-run
```

## index.html requirements

- Website mode uses root `index.html` for the space homepage when it is present.
- SPA mode serves client-side routes through root `index.html`.
- Files mode does not support SPA fallback. Use files mode for browsable static file trees.

## First publish vs update

The first publish creates a [space](/spaces). It also saves the space reference
locally. Later publishes update the space from local state or `--space`. Updates
compare `sha256` and size against the current version. Spacefast does not upload
unchanged files again. When the upload finishes, the
[live channel](/publishing/channels) moves to the new version atomically.

Publishes and builds draw from the team's resolved capacity. CLI pushes and CI
builds count the same. See [Billing and limits](/account/billing).

## Related

- [Versions and channels](/publishing/channels) — immutable history and
  live/preview pointers.
- [Rollback](/publishing/rollback) — promote an earlier version.
- [Space settings](/spaces/settings) — `sf.jsonc` and applying saved settings.

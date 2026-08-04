---
title: Publish a site
sidebar:
  label: Overview
description: How publishing works in Spacefast, including CLI and agent publishes, immutable versions, updates, and the dashboard Drop uploader.
---

Publish a directory or a single file. A changed-content publish creates an
immutable version with its own URL. The live URL moves to it — typically in
under ten seconds after the upload completes. Publishing content identical to
the current version is a no-op. Earlier versions stay available for rollback.

Directory publishes preserve relative paths. They can include `_redirects`,
`_headers`, and `sf.jsonc`. Spacefast serves static files only. Uploaded
server-side code never executes. The CLI and dashboard warn you early about
files that the runtime safety policy blocks.

## CLI and agents

The [CLI](/cli) is the main publish path: incremental uploads, `--json`
receipts, CI, and dry-runs. It is also what [agents](/agents) run for you — the
[quickstart](/getting-started/quickstart) starts there.

```bash
sf publish ./dist
```

```bash
sf publish ./dist --space docs --json
```

```bash
sf publish ./dist --dry-run
```

| Path                | Best for                                         |
| ------------------- | ------------------------------------------------ |
| `sf publish ./dist` | Local projects, agents, incremental updates      |
| `POST /v1/publish`  | One-shot HTTP from scripts — see [API](/api)     |
| Dashboard Drop      | No tooling at hand, quick zip/`index.html`       |

## Dashboard Drop

Drop is the dashboard uploader and the no-tooling escape hatch: drag a folder,
a zip archive, or a standalone `index.html` onto a space and publish. Uploads
resume if interrupted, zips are expanded before publishing, and `index.html`
belongs at the archive root unless you want a file listing.

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

---
title: Publish a site
sidebar:
  label: How publishing works
description: How publishing works in Spacefast, including CLI and agent publishes, immutable versions, updates, and the dashboard Drop uploader.
---

Publish a directory or a single file. A changed-content publish creates an
immutable version with its own URL, and the live URL moves to it once the
upload completes. Publishing content identical to the current version is a
no-op. Earlier versions stay available for [rollback](/publishing/channels).

Directory publishes preserve relative paths. They can include `_redirects`,
`_headers`, and [`sf.jsonc`](/spaces/settings). Spacefast serves static files
only. Uploaded server-side code never executes. The CLI and dashboard warn you
early about files that the runtime safety policy blocks.

## CLI and agents

The [CLI](/cli) is the main publish path: incremental uploads, `--json`
receipts, CI, and dry-runs. It is also what [agents](/agents) run for you; the
[quickstart](/getting-started/quickstart) starts there.

```bash
sf publish ./dist
```

Add `--space docs` to target a space explicitly, `--json` for a
machine-readable receipt, or `--dry-run` to preview what would upload.

| Path                | Best for                                     |
| ------------------- | -------------------------------------------- |
| `sf publish ./dist` | Local projects, agents, incremental updates  |
| `POST /v1/publish`  | One-shot HTTP from scripts (see [API](/api)) |
| Dashboard Drop      | No tooling at hand, zip or `index.html`      |

## Dashboard Drop

Drop is the dashboard uploader and the no-tooling escape hatch: drag a folder,
a zip archive, or a standalone `index.html` onto a space and publish. Uploads
resume if interrupted, zips are expanded before publishing, and `index.html`
belongs at the archive root unless you want a file listing.

## index.html requirements

Which file serves the homepage depends on the space mode:

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
builds count the same.

## Content scanning

Spacefast scans published content for malware and abusive material. A publish
can be held briefly while a scan finishes, surfaced as
[`scan_pending`](/errors/scan_pending). A scan that finds malware blocks the
publish with [`malware_detected`](/errors/malware_detected).

Takedowns remove serving for abusive content; affected requests return
[`abuse_takedown`](/errors/abuse_takedown). Abusive sites can be reported
through the API. See the [API reference](/api/reference).

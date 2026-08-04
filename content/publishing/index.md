---
title: Publish a site
description: How publishing works in Spacefast, including dashboard Drop, CLI publishes, immutable versions, and updates.
---

Publish a directory or a single file. A changed-content publish creates an
immutable version with its own URL, and the live URL moves to it — typically in
under ten seconds after the upload completes. Publishing content identical to
the current version is a no-op. Earlier versions stay available for rollback,
so publishing is never a one-way door.

Directory publishes preserve relative paths and can include `_redirects`,
`_headers`, and `sf.jsonc`. Spacefast serves static files only: uploaded
server-side code never executes, and the CLI and dashboard warn early about
files blocked by runtime safety policy.

## Dashboard Drop

The fastest path for humans is the dashboard uploader (Drop) on
[spacefast.com](https://spacefast.com) or inside a space on
`my.spacefast.com/<team>/<space>`:

1. Drag a folder, a zip archive, or a standalone `index.html` onto the upload
   box.
2. Publish. You get a live URL, a permanent version URL, and — for anonymous
   first publishes — a claim link.
3. Later updates on a claimed space use the same Drop on that space's page.

Folders and standalone files resume interrupted uploads. Zip archives are
expanded before publishing. Put `index.html` at the archive root unless you
want a file listing.

No CLI install required for Drop. Prefer the [CLI](/cli) when you want
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
- Files mode does not support SPA fallback and is meant for browsable static file trees.

## First publish vs update

The first publish creates a [space](/spaces) and saves its reference locally.
Later publishes update the space from local state or `--space`. Updates compare
`sha256` and size against the current version so unchanged files are not
re-uploaded. When the upload finishes, the [live channel](/publishing/channels)
moves to the new version atomically.

Publishes and builds draw from the team's resolved capacity. CLI pushes and CI
builds count the same. See [Limits](/account/limits).

## Related

- [Versions](/publishing/versions) and [Rollback](/publishing/rollback) — immutable history.
- [Channels](/publishing/channels) — live/preview pointers.
- [Apply](/spaces/apply) — saved settings without a new content version.
- [Quickstart](/getting-started/quickstart) — first Drop or CLI publish.

---
title: Publishing
description: How publishing works in Spacefast, including uploads, CLI publishes, immutable versions, and updates.
---

Publish a directory or a single file. A changed-content publish creates an
immutable version with its own URL, and the live URL moves to it — typically in
under ten seconds after the upload completes. Publishing content identical to
the current version is a no-op. Earlier versions stay available for rollback,
so publishing is never a one-way door.

Directory publishes preserve relative paths and can include `_redirects`, `_headers`, and `sf.jsonc`. Spacefast serves static files only: uploaded server-side code never executes, and the CLI and dashboard warn early about files blocked by runtime safety policy.

## Folder vs zip

The CLI publishes folders and files from disk. The dashboard direct uploader accepts folders, zip archives, and standalone `index.html` files. Folders and files use resumable upload targets. Zip archives go through the `/v1/publish` archive path and are expanded by the control plane before publish. For zip archives, put `index.html` at the archive root unless you want a file listing.

## index.html requirements

- Website mode uses root `index.html` for the space homepage when it is present.
- SPA mode serves client-side routes through root `index.html`.
- Files mode does not support SPA fallback and is meant for browsable static file trees.

## First publish vs update

The first publish creates a space and saves its reference locally. Later publishes update the space from local state or `--space`. Updates compare `sha256` and size against the current version so unchanged files are not re-uploaded. Finalize moves the live URL to the new version atomically; large file and folder publishes follow the upload targets returned by the API.

Publishes and builds draw from one pooled monthly allowance — 100 per month on Free, 1,000 per month on Personal, unlimited on Work. CLI pushes and CI builds count the same. See [Limits](/limits).

```bash
sf publish ./dist
sf publish ./dist --space docs --json
sf publish ./dist --dry-run
```

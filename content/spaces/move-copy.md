---
title: Move or copy a space
description: Move space content and ownership with export archives, import, duplicate, and team transfer.
---

Spaces are durable, but you still need to copy content, hand a project to
another team, or take a portable archive. These operations keep the
[space model](/spaces) intact — they do not invent a second packaging format
outside Spacefast export archives.

## Export

Create a portable archive of the selected space. With `--wait` you get a
download link; add `--output` to write the zip locally:

```bash
sf spaces export --space docs --wait --output ./site-export.zip
```

Export a single version instead of the default set:

```bash
sf spaces export --space docs --version ver_123 --wait
```

## Import

Import an export zip as draft versions on the target space. Pass `--publish`
to promote the imported version when it is ready:

```bash
sf spaces import ./site-export.zip --space docs
```

```bash
sf spaces import --from-export exp_123 --publish --space docs
```

Import does not silently overwrite live content unless you ask it to publish.

## Duplicate

Duplicate downloads a version and publishes those files as a **new** space:

```bash
sf spaces duplicate --space docs --slug docs-copy
```

Defaults to the live version. Pass `--version`, `--title`, and `--wait` as
needed. Duplicate is the quick “same content, new identity” path; export/import
is better when you need an archive or a controlled draft import.

## Transfer to another team

Request a transfer; the current owner keeps control until a member of the
target team accepts:

```bash
sf spaces transfer acme --space spc_123
```

```bash
sf transfers accept trf_123
```

```bash
sf transfers cancel trf_123
```

Pending transfers expire (default 7 days per the API). Cross-tenant transfers
are unsupported — both teams must live in the same tenant.

Renames and other identity edits are refused while a space is transferring.
See [Rename a space](/spaces/rename).

## Download files only

When you only need the files from a version (not a full export archive):

```bash
sf spaces download --space docs --output ./out
```

```bash
sf versions download
```

## Related

- [Spaces](/spaces) — create, claim, rename, delete.
- [Channels](/publishing/channels) — what “live” means when you duplicate or import.
- [Teams](/account/teams) — transfer targets and membership.

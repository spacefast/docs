---
title: Rename, move, or copy
description: Change a space's slug, export and import content, duplicate a space, or transfer it to another team.
---

Spaces are durable, but their identity and ownership can change. A rename keeps
the immutable space ID. Export, import, duplicate, and transfer keep the
[space model](/spaces) intact. There is no second packaging format outside
Spacefast export archives.

## Rename a space

A rename changes the human-facing slug and the managed `view.fast` hostname.
The immutable space ID stays the same.

In the dashboard, open **Space Settings → General → Managed address**. Enter
the new slug. Choose **Change managed address**.

From the CLI:

```bash
sf spaces update --space old-name --slug new-name --wait
```

Or send a slug-only API request:

```http
PATCH /v1/spaces/{spaceId}
Content-Type: application/json

{ "slug": "new-name" }
```

Use the immutable space ID in integrations that rename spaces. Slugs can
change.

What changes:

- The slug and current managed hostname change together.
- Every former managed hostname redirects directly to the current one with a
  path- and query-preserving `307 Temporary Redirect`.
- Former branch aliases redirect to their counterpart under the current
  managed hostname.

Former managed addresses remain attached for the life of the space unless
Spacefast explicitly releases one. Repeated renames never create a redirect
chain.

What stays the same:

- The immutable space ID.
- Custom domains, including the primary custom domain.
- Immutable version URLs.
- Published versions, branch aliases, access settings, and content.

If the space has a live version, the rename returns an operation that updates
the runtime and provider hostnames. `--wait` waits for that operation. You can
repeat the same rename. It safely resumes an interrupted convergence. Spacefast
refuses a rename while a space is moving, transferring, or deleting. The caller
needs `spaces:rename` permission.

## Export

Create a portable archive of the selected space. With `--wait` you get a
download link. Add `--output` to write the zip locally:

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

Duplicate defaults to the live version. Pass `--version`, `--title`, and
`--wait` as needed. Duplicate is the quick “same content, new identity” path.
Prefer export/import when you need an archive or a controlled draft import.

## Transfer to another team

Request a transfer. The current owner keeps control until a member of the
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

Pending transfers expire (default 7 days per the API). Spacefast does not
support cross-tenant transfers. Both teams must live in the same tenant.

## Download files only

When you only need the files from a version (not a full export archive):

```bash
sf spaces download --space docs --output ./out
```

```bash
sf versions download
```

## Related

- [Spaces](/spaces) — create, claim, delete.
- [Versions and channels](/publishing/channels) — what “live” means when you
  duplicate or import.
- [Teams](/account/teams) — transfer targets and membership.

---
title: Spaces
sidebar:
  label: Overview
description: Create, claim, rename, move, and delete spaces, the durable resource behind a Spacefast site.
---

A space is the durable resource behind a Spacefast site. A publish changes a
space's content, not its identity: the live URL stays stable, and each
successful publish creates an immutable version URL.

## What a space owns

- The current [live channel](/publishing/channels) and its stable URL.
- Immutable [versions](/publishing/channels), [builds](/publishing/git), and rollback.
- Routing, headers, page behavior, and other [configuration](/spaces/settings).
- [Access policy](/spaces/access), [custom domains](/spaces/domains), and [Collab](/spaces/comments).

The [REST API reference](/api/reference) has exact request and response
shapes; the CLI exposes the same resources with human-friendly commands.

## Create

Create an empty space, or let the first [publish](/publishing) create one:

```bash
sf spaces add --name docs
```

```bash
sf publish ./dist --name docs
```

The first CLI publish writes `.spacefast/state.json` so later publishes from
that directory update the same space. List what you can see, or inspect one:

```bash
sf spaces ls --team acme
sf spaces get --space docs
```

Dashboard URLs: `my.spacefast.com/acme/docs`. Old dashboard links that contain
`/~/` are legacy-only and permanently redirect to the canonical URL.

## Claim

An anonymous publish expires unless you claim it within 6 hours. Open the claim
link from the publish receipt and sign in, or claim from the directory you
published from after you sign in with [`sf login`](/cli#sf-login):

```bash
sf spaces claim --team my-team
```

See [Anonymous publish](/publishing/anonymous) for expiry, scanning, and
continuation after claim.

## Rename

A rename changes the human-facing slug and the managed `view.fast` hostname;
the immutable space ID stays the same, so use the ID in integrations that
rename spaces.

In the dashboard, open **Space Settings → General → Managed address**, enter
the new slug, and choose **Change managed address**. From the CLI:

```bash
sf spaces update --space old-name --slug new-name --wait
```

Or send a slug-only API request:

```http
PATCH /v1/spaces/{spaceId}
Content-Type: application/json

{ "slug": "new-name" }
```

- Every former managed hostname redirects to the current one with a path- and
  query-preserving `307 Temporary Redirect`; former branch aliases redirect to
  their counterpart under the current hostname.
- Former managed addresses remain attached for the life of the space unless
  Spacefast explicitly releases one.
- Repeated renames never create a redirect chain.
- Custom domains, immutable version URLs, published versions, access settings,
  and content stay the same.

If the space has a live version, the rename returns an operation that updates
the runtime and provider hostnames; `--wait` waits for it, and repeating the
same rename resumes an interrupted one. Spacefast refuses a rename while a
space is moving, transferring, or deleting. The caller needs `spaces:rename`
permission.

## Export and import

Export creates a portable archive of the selected space. With `--wait` you get
a download link; add `--output` to write the zip locally, or `--version` to
export a single version instead of the default set:

```bash
sf spaces export --space docs --wait --output ./site-export.zip
sf spaces export --space docs --version ver_123 --wait
```

Import an export zip as draft versions on the target space. Import never
overwrites live content unless you pass `--publish` to promote the imported
version when it is ready:

```bash
sf spaces import ./site-export.zip --space docs
sf spaces import --from-export exp_123 --publish --space docs
```

## Duplicate

Duplicate downloads a version and publishes those files as a new space:

```bash
sf spaces duplicate --space docs --slug docs-copy
```

Duplicate defaults to the live version; pass `--version`, `--title`, and
`--wait` as needed. It is the same-content, new-identity path; prefer export
and import when you need an archive or a controlled draft import.

## Transfer to another team

Request a transfer. The current owner keeps control until a member of the
target team accepts:

```bash
sf spaces transfer acme --space spc_123
sf transfers accept trf_123
sf transfers cancel trf_123
```

- Pending transfers expire, after 7 days by default.
- Both teams must live in the same tenant.

## Download files only

Download a version's files when you do not need a full export archive, or grab
one version as an archive:

```bash
sf spaces download --space docs --output ./out
sf versions download --space docs --output ./archive.tar.gz
```

## Delete

```bash
sf spaces rm --space docs
```

Spacefast queues the deletion. The CLI asks you to confirm unless you pass
`--yes`.

## Related

- [Versions and channels](/publishing/channels): what "live" means when you
  duplicate or import.
- [Teams](/account/teams): ownership, transfer targets, and defaults for new
  spaces.
- [Monitoring](/spaces/monitoring): analytics, logs, and the activity timeline.

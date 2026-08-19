---
title: Manage spaces
description: Create, claim, rename, duplicate, transfer, download, and delete the spaces behind your Spacefast sites.
---

A space is the durable resource behind a Spacefast site. A publish changes a
space's content, not its identity: the live URL stays stable, and each
successful publish creates an immutable version URL. This page covers the
lifecycle operations on that identity.

The [REST API reference](/api/reference) has exact request and response
shapes. The CLI exposes the same resources with human-friendly commands.

## Create

Create an empty space, or let the first [publish](/publish) create one:

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

Dashboard URLs follow the pattern `my.spacefast.com/acme/docs`.

### Data location

`POST /v1/spaces` and `PATCH /v1/spaces/{spaceId}` accept a `dataLocation`
field, and responses report the resolved data-location region (for example
`"dca"`). The region is fixed when the space is created and immutable
afterwards. An unsupported region fails with
[`invalid_data_location`](/errors/invalid_data_location). Pick a documented
region, or use `auto`. Changing the region later fails with
[`data_location_immutable`](/errors/data_location_immutable). Create a new
space in the region you want.

## Claim

An anonymous publish expires unless you claim it within 6 hours. Claim from
the claim link in the browser, or from the CLI after you sign in with
[`sf login`](/cli#sf-login):

```bash
sf spaces claim
sf spaces claim --space spc_123 --claim-token sfc_123 --team my-team
```

See [Publish without an account](/publish/anonymous) for expiry, scanning,
and continuation after claim.

## Rename

A rename changes the human-facing slug and the managed `view.fast`
hostname. The immutable space ID stays the same, so use the ID in
integrations that rename spaces.

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

- Every former managed hostname redirects to the current one with a path-
  and query-preserving `307 Temporary Redirect`.
- Former branch aliases redirect to their counterpart under the current
  hostname.
- Former managed addresses remain attached for the life of the space unless
  Spacefast explicitly releases one.
- Repeated renames never create a redirect chain.
- Custom domains, immutable version URLs, published versions, access
  settings, and content stay the same.

The display name has one constraint. When the live version's `sf.jsonc`
sets `name`, the API refuses to rename the space and returns
[`name_managed_by_config`](/errors/name_managed_by_config). Change `name`
in the file and publish, or remove it from the file to rename through the
API.

If the space has a live version, the rename returns an operation that
updates the runtime and provider hostnames. `--wait` waits for that
operation, and repeating the same rename resumes an interrupted one.
Spacefast refuses a rename while a space is moving, transferring, or
deleting. The caller needs `spaces:rename` permission.

## Duplicate

Duplicate downloads a version and publishes those files as a new space:

```bash
sf spaces duplicate --space docs --slug docs-copy
```

Duplicate defaults to the live version. Pass `--version`, `--title`, and
`--wait` as needed. The copy has the same content and a new identity.

## Transfer to another team

Request a transfer. The current owner keeps control until a member of the
target team accepts:

```bash
sf spaces transfer acme --space spc_123
sf transfers accept trf_123
sf transfers cancel trf_123
```

- Pending transfers expire after 7 days by default.
- Both teams must live in the same tenant.

## Download files

Copy a version's files into a local directory:

```bash
sf spaces download --space docs --output ./out
```

Pass `--version` to pick a version other than live.

## Delete

Delete a space from the CLI:

```bash
sf spaces rm --space docs
```

Spacefast queues the deletion. Unless you pass `--yes`, the CLI asks you
to confirm.

## Related

- [Versions, channels, and rollback](/publish/versions): what "live" means
  when you duplicate or import.
- [Teams](/account/teams): ownership, transfer targets, and defaults for
  new spaces.
- [Monitoring](/operate/monitoring): analytics, logs, and the activity
  timeline.

---
title: Spaces
description: Create, claim, rename, and delete spaces — the durable resource behind a Spacefast site.
---

A space is the durable resource behind a Spacefast site. A publish changes a
space's content, not its identity. The live URL stays stable. Each successful publish creates an immutable version
URL.

## What a space owns

- The current [live channel](/publishing/channels) and its stable URL.
- Immutable [versions](/publishing/channels), [builds](/publishing/git), and rollback.
- Routing, headers, page behavior, and other [configuration](/spaces/settings).
- [Access policy](/spaces/access), [custom domains](/spaces/domains), and [Collab](/spaces/comments).

Use the [REST API reference](/api/reference) for exact request and response
shapes. The CLI exposes the same resources with human-friendly commands.

## Create

Create an empty space, or let the first [publish](/publishing) create one:

```bash
sf spaces add --name docs
```

```bash
sf create docs
```

```bash
sf publish ./dist --name docs
```

The first CLI publish writes `.spacefast/state.json` so later publishes from
that directory update the same space. List what you can see:

```bash
sf spaces ls --team acme
```

```bash
sf spaces get --space docs
```

Dashboard URLs: `my.spacefast.com/<team>/<space>`.

## Claim

An anonymous publish expires unless you claim it within 6 hours. Claim from the
claim link in the browser, or from the CLI after you
[sign in](/account/sign-in):

```bash
sf spaces claim
```

```bash
sf spaces claim --space spc_xxx --claim-token claim_xxx --team my-team
```

See [Anonymous publish](/publishing/anonymous) for expiry, scanning, and
continuation after claim.

## Rename

Use a dedicated flow to change the slug and the managed `view.fast` hostname:
[Rename a space](/spaces/manage).

```bash
sf spaces update --space old-name --slug new-name --wait
```

## Delete

```bash
sf spaces rm --space docs
```

Spacefast queues the deletion. The CLI asks you to confirm unless you pass
`--yes`.

## Export, import, duplicate, transfer

The [Export, import, duplicate, transfer](/spaces/manage) page covers moves
of content and ownership.

## Ordinary lifecycle

1. Create a space directly or let the first publish create it.
2. Publish static output as a new version. The publish does nothing when the
   content matches.
3. Inspect the receipt. Wait for the version to become ready.
4. Update configuration, [apply](/spaces/settings) saved settings, or attach a
   [domain](/spaces/domains) without changing the space identity.
5. Promote or [roll back](/publishing/rollback) when a channel should move.

## Related

- [Teams](/account/teams) — ownership and defaults for new spaces.
- [Activity](/spaces/activity) — event timeline for the space.

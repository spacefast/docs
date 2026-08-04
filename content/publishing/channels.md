---
title: Move the live site
description: Point live and preview channels at immutable versions, and read promotion history.
---

A channel is a named pointer from a stable address to one immutable
[version](/publishing/versions). Publishing and rollback move a channel; they do not
rewrite the version it used to serve.

## Live and preview

Every space has a `live` channel — that is what the space's live URL serves.
Spaces can also expose a `preview` channel for a non-live pointer you promote
explicitly.

List where each channel points:

```bash
sf channels ls --space docs
```

## Promote and roll back

Promote a ready version to a channel (default `live`):

```bash
sf promote v12 --space docs
```

```bash
sf promote v12 --space docs --channel live
```

`sf rollback v12` is the recovery-shaped form of the same live promotion. See
[Rollback](/publishing/rollback).

## Promotion history

The channel history is the deploy log for that pointer — newest first:

```bash
sf channels history --space docs
```

```bash
sf channels history preview --space docs
```

Use it when you need to know what was live, when it changed, and which version
to promote next.

## How this fits publishing

1. [Publish](/publishing) creates (or no-ops) an immutable version.
2. A successful live publish moves the `live` channel to that version.
3. [Rollback](/publishing/rollback) / `sf promote` moves the channel again without
   rebuilding.
4. Channel history records each move.

Saved space settings that are not yet on the serving runtime are a different
door — use [`sf apply`](/spaces/apply).

## Related

- [Versions](/publishing/versions) — immutable snapshots and URLs.
- [Builds](/publishing/git) — source builds that produce versions.
- [Activity](/spaces/activity) — account- and space-scoped event feed, including
  promotions.

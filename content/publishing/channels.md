---
title: Versions and channels
description: How immutable versions work, and how live and preview channels point at them.
---

Every changed publish creates an immutable version. The version URL is
permanent. The space's live URL is a pointer — a **channel** — that moves only
when a publish is ready. Publishing and rollback move a channel. They do not
rewrite the version it used to serve.

## The release boundary

Uploading bytes alone is not success: finalization validates the complete
snapshot, prepares it for serving, and promotes it atomically. A request never
sees half of a release.

The publish receipt contains both identities:

- `space.liveUrl` is the stable address people visit.
- `version.immutableUrl` is the exact release you just created.

## Live and preview

Every space has a `live` channel. That is what the space's live URL serves.
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
[Rollback](/publishing/rollback) for the CLI and dashboard workflow, or the
[API reference](/api/reference) for the exact operation.

## Promotion history

The channel history lists each promotion for that pointer, newest first:

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

Saved space settings that are not yet on the serving runtime need a different
command. Use [`sf apply`](/spaces/settings#apply-saved-settings).

## Related

- [Builds](/publishing/git) — source builds that produce versions.
- [Activity](/spaces/activity) — account- and space-scoped event feed, including
  promotions.

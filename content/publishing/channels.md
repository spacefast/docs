---
title: Versions and channels
description: How immutable versions work, how live and preview channels point at them, and how to roll back.
---

Every changed publish creates an immutable version. The version URL is
permanent. The space's live URL is a pointer, called a **channel**, that moves
only when a publish is ready. Publishing and rollback move a channel; they do
not rewrite the version it used to serve.

## The release boundary

A request never sees half of a release: finalization validates the complete
snapshot, prepares it for serving, and promotes it atomically. Uploading bytes
alone is not success.

The publish receipt contains both identities. The API receipt spells them
`space.liveUrl` and `version.immutableUrl`; the CLI `--json` receipt spells
them `siteUrl` and `immutableUrl`.

## The live channel

Every space has one channel, `live`. That is what the space's live URL serves.
To publish a version without moving it, run `sf publish --target preview`: it
creates the version and leaves `live` where it is. Promote the version later
when you want it served.

List where the channel points:

```bash
sf channels ls --space docs
```

## Promote

Promote a ready version to a channel (default `live`):

```bash
sf promote v12 --space docs
```

```bash
sf promote v12 --space docs --channel live
```

See the [API reference](/api/reference) for the exact operation.

## Roll back

Rolling back promotes an earlier ready version to live. There is no rebuild
and no re-upload; the site is live in seconds. List versions, then roll back
to the one you want:

```bash
sf versions ls
```

```bash
sf rollback v12 --space docs
```

Run these from a directory that contains `.spacefast/state.json`, or pass
`--space` to target a space explicitly.

`sf rollback` is the recovery-shaped form of the same live promotion that
`sf promote` performs; use whichever frames the change the way you mean it.
Both accept a version id, ref, or number such as `ver_123`, `v12`, or `12`.

## Promotion history

The channel history lists each promotion for that pointer, newest first:

```bash
sf channels history --space docs
```

Use it when you need to know what was live, when it changed, and which version
to promote next.

## Inspect and compare versions

Every version is a fixed snapshot you can browse in the dashboard: open a
space, choose a version, and open its files to preview them, copy raw-file
URLs, or download a ZIP. Private file URLs use your current access and can
expire. Do not treat them as permanent public links.

Comparing two versions shows the added, changed, and removed paths, with
line-level diffs for text files, useful before promoting. To copy a version's
files into a local directory:

```bash
sf spaces download --space docs --version v3 --output ./site
```

It writes loose files, not an archive. See
[`sf spaces download`](/cli#sf-spaces-download) for version selection and
output options.

## Permanent version URLs

Each version URL serves exactly the content that you published, and that
content never changes. The team's current entitlements control whether an
older version URL is public. Entitlements do not change owner access or API
access. Rollback and `sf spaces download` continue to work.

## Retention and storage

Committed file bytes across versions count toward the team's storage quota. If
you reach the quota, Spacefast blocks new publishes. It never takes the live
site down. Delete old versions or add storage to free up room.

Versions are kept until you delete them. Only never-finalized draft uploads
expire on their own.

## How this fits publishing

1. [Publish](/publishing) creates (or no-ops) an immutable version.
2. A successful live publish moves the `live` channel to that version.
3. `sf rollback` / `sf promote` moves the channel again without rebuilding.
4. Channel history records each move.

Saved space settings that are not yet on the serving runtime need a different
command. Use [`sf apply`](/spaces/settings#apply-saved-settings).

Source builds that produce versions are covered in
[Build from Git](/publishing/git). Promotions also appear in the analytics,
logs, and activity feed under [Monitoring](/spaces/monitoring).

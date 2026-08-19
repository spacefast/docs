---
search:
  tags: [rollback, revert, channels, promote]
title: Versions, channels, and rollback
sidebar:
  label: Versions and rollback
description: Learn how immutable versions work, how the live and preview channels point at them, and how to roll back.
---

Every changed publish creates an immutable version with a permanent URL. The
space's live URL is a pointer, called a channel, that moves only when a
publish is ready. Publishing and rollback move the channel; neither ever
rewrites the version it used to serve.

## The release boundary

A request never sees half of a release. Finalization validates the complete
snapshot, prepares it for serving, and promotes it atomically; uploading
the bytes alone does not complete the publish. The publish receipt carries
both URLs. The API names them `space.liveUrl` and `version.immutableUrl`,
and the CLI `--json` receipt names them `siteUrl` and `immutableUrl`.

## The live channel

Every space has one channel, `live`, and that is what the live URL serves.
List where it points:

```bash
sf channels ls --space docs
```

To create a version without serving it, publish to the preview target:

```bash
sf publish --target preview
```

The version exists, `live` stays where it is, and you promote the version
when you want it served.

## Promote and roll back

Promotion points a channel (default `live`) at a version that is already
ready:

```bash
sf promote v12 --space docs
```

A rollback is the same operation applied to an earlier ready version. List
the versions, then roll back:

```bash
sf versions ls
```

```bash
sf rollback v12 --space docs
```

Nothing rebuilds and nothing re-uploads, so the site changes in seconds.
Both commands accept a version id, ref, or number such as `ver_123`, `v12`,
or `12`. Run them from a directory that contains `.spacefast/state.json`, or
pass `--space` to target a space explicitly. The
[API reference](/api/reference) has the exact operation.

To see what was live, when it changed, and which version to promote next,
list the channel history. It shows each promotion, newest first:

```bash
sf channels history --space docs
```

## Inspect and compare versions

Every version is a fixed snapshot that you can browse in the dashboard.
Open a space, choose a version, and open its files to preview them, copy
raw-file URLs, or download a ZIP. Private file URLs use your current access
and can expire, so do not treat them as permanent public links.

Before you promote, compare two versions to see the added, changed, and
removed paths, with line-level diffs for text files. To copy a version's
files into a local directory:

```bash
sf spaces download --space docs --version v3 --output ./site
```

It writes loose files rather than an archive. See
[`sf spaces download`](/cli#sf-spaces-download) for version selection and
output options.

## Permanent version URLs

A version URL serves exactly the content you published, and that content
never changes. The team's current entitlements control whether an older
version URL is public. They do not change owner access or API access, and
rollback and `sf spaces download` keep working either way.

## Retention and storage

Committed file bytes across versions count toward the team's storage quota.
Reaching the quota blocks new publishes but never takes the live site down.
To free up room, delete old versions or add storage. Spacefast keeps
versions until you delete them; only never-finalized draft uploads expire
on their own.

## How this fits publishing

1. [Publish](/publish) creates (or no-ops) an immutable version.
2. A successful live publish moves the `live` channel to that version.
3. `sf rollback` or `sf promote` moves the channel again without rebuilding.
4. Channel history records each move.

Saved space settings that are not yet on the serving runtime move with a
different command, [`sf apply`](/serve/settings#apply-saved-settings).
[Build from Git](/publish/git) covers source builds that produce
versions, and promotions also appear in the analytics,
logs, and activity feed under [Monitoring](/operate/monitoring).

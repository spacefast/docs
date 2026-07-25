---
title: Publishing and versions
description: How immutable versions, live promotion, no-op publishes, and rollback fit together.
---

Every changed publish creates an immutable version. The version URL is permanent;
the space's live URL is a pointer that moves only when the publish is ready.

## The release boundary

Uploading bytes is not success. Finalization validates the complete snapshot,
prepares it for serving, and promotes it atomically. A request never sees half
of a release.

The publish receipt contains both identities:

- `space.liveUrl` is the stable address people visit.
- `version.immutableUrl` is the exact release you just created.

Publishing identical content is a recognized no-op. It keeps the current version
instead of manufacturing history.

## Roll back

Rollback promotes an earlier ready version. It does not rebuild or mutate that
snapshot. See [Rollback](/rollback) for the CLI and dashboard workflow, or use
the [API reference](/api/reference) for the exact operation.

For file formats, upload modes, and the full publish flow, continue to
[Publishing](/publishing).

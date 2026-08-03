---
title: Rollback & versions
description: How to roll back a Spacefast space to an earlier version.
---

Every publish creates an immutable version with its own URL. Rolling back promotes an earlier ready version to live — no rebuild, no re-upload, live in seconds. Your live site stays up and you can always roll back.

```bash
sf versions ls
```

```bash
sf rollback v12
```

Run these from a directory with `.spacefast/state.json`, or pass `--space docs` to target a space explicitly. Use `sf versions ls` to find the target. `sf rollback <version>` is the recovery-focused command; `sf promote <version>` uses the same backend operation when you want to frame it as promotion rather than recovery. Versions and channels are the canonical vocabulary; `sf deploy` is the exact alias of `sf publish`, and `sf deployments` is an accepted alias of `sf versions` — deploying is publishing, and a deployment is a version. Both commands accept a version id, ref, or number such as `ver_123`, `v12`, or `12`.

## Retention and storage

Committed file bytes across versions count toward the team's storage quota. Hitting the quota blocks new publishes but never takes the live site down; free up room by deleting old versions or adding storage. The live version and any version a channel points at are never deleted by retention, so the current rollback target is always safe.

On Free, files of versions that are no longer live or referenced are retained for about six months from publish. Before anything is deleted you get at least 30 days of warning with an export prompt.

## Permanent Version URLs

Each version's URL serves exactly what was published — the content at that URL never changes. On Free, permanent Version URLs are public for 7 days after publish, then require sign-in; on Personal and Work they stay public. Owner and API access — including rollback and export — is unaffected.

:::note[Always-public Version URLs]
Not available on Free. Available on Personal and Work.
:::

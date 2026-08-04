---
title: Activity feed
description: Read space and account activity events such as publishes and promotions.
---

The activity feed is the audit-shaped event stream for what changed on a space
or across your account. Use it when you need a timeline. Do not use it as a
traffic graph ([analytics](/spaces/traffic)). Do not use it as a channel
promotion log ([channel history](/publishing/channels)).

## Space activity

```bash
sf activity
```

```bash
sf activity --space docs
```

Filter by taxonomy code, for example promotions:

```bash
sf activity --code version.promoted
```

## Account-wide activity

```bash
sf activity --all
```

```bash
sf activity --all --since 2026-06-01T00:00:00Z
```

Paginate with `--cursor` from a previous response. `--limit` defaults to 50
(max 100).

## Dashboard

Open a space in the dashboard. Use its Activity view for the same events in a
human timeline. Account-level activity covers every event your login can see
across teams and spaces.

## Work panel

The dashboard's **Work** panel covers work that is still running: publishes,
domain attachment, imports, and agent approvals. The panel shows what runs now,
what needs you, and what finished recently. During a browser upload, keep the
tab open until the upload hands off to the server. The existing live version
stays live until the new publish succeeds.

## Related

- [Teams](/account/teams) — who owns the spaces in the feed.

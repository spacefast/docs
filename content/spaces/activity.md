---
title: Activity feed
description: Read space and account activity events such as publishes and promotions.
---

The activity feed is the audit-shaped event stream for what changed on a space
or across your account. Use it when you need a timeline, not a traffic graph
([analytics](/spaces/traffic)) and not a channel deploy log
([channel history](/publishing/channels)).

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

Open a space in the dashboard and use its Activity view for the same events in
a human timeline. Account-level activity covers every event your login can see
across teams and spaces.

## Related

- [Channels](/publishing/channels) — promotion history for one pointer.
- [Traffic](/spaces/traffic) — request and visitor series.
- [Teams](/account/teams) — who owns the spaces in the feed.

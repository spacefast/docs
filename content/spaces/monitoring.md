---
title: Monitor a space
description: Read traffic analytics, edge and runtime logs, and the activity feed for a space.
---

A space reports three streams: analytics for how much traffic it received over
time, logs for what the edge served and what runtime code wrote, and activity
for the audit-shaped timeline of what changed and who changed it.

The dashboard shows all three on a space at `my.spacefast.com/acme/docs`.
Plan tier controls history and granularity.

## Analytics

Read a space's traffic summary:

```bash
sf analytics --space docs
```

The default window is 7 days; choose `48h`, `7d`, or `30d` with `--window`.
Add `--json` for scripts and agents.

## Logs

Read recent edge requests:

```bash
sf logs --space docs
```

Follow runtime output from Functions or Zero handlers:

```bash
sf logs runtime --space docs --follow
```

Use `--request-id` to trace one request across runtime output. When a source
build or publish fails, read the build's logs:

```bash
sf builds logs bld_123
```

Treat logs as operational data: do not write credentials or personal data from
application code.

## Activity feed

List what changed on a space and who changed it:

```bash
sf activity --space docs
```

Filter by taxonomy code (for example `--code channel.promoted`), or read
account-wide events with `--all` and `--since`. Paginate with `--cursor`;
`--limit` defaults to 50 (max 100).

Activity is not a traffic graph, and it is not the channel promotion log:
that is [channel history](/publishing/channels).

## Work panel

The dashboard's **Work** panel covers work that is still running: publishes,
domain attachment, imports, and agent approvals. During a browser upload, keep
the tab open until the upload hands off to the server.

## Related

- [Channels](/publishing/channels): which version is live while you interpret traffic.
- [Teams](/account/teams): who owns the spaces in the feed.

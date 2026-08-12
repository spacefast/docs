---
title: Monitor a space
description: Read traffic analytics, edge and runtime logs, and the activity feed for a space.
---

A space reports three streams: analytics for how much traffic it received over
time, logs for what the edge served and what runtime code wrote, and activity
for the audit-shaped timeline of what changed and who changed it.

The dashboard shows all three on a space at `my.spacefast.com/acme/docs`:
traffic graphs under **Traffic**, request logs under **Traffic → Requests**
(with an Access/Runtime toggle), and the audit feed under **Settings →
Advanced**.

Plan tier controls how far back logs go: 48 hours on Free, 30 days on
Personal, unlimited on Work and Enterprise. Analytics windows and their
granularity are the same on every plan.

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

Follow runtime output from Zero handlers, Functions workers, or PHP
functions:

```bash
sf logs runtime --space docs --follow
```

Runtime lines are collected after the response returns and indexed off-box,
so a line you just triggered takes a while to appear. An empty page means not
yet, not broken. Reading runtime logs needs the `versions:read` scope; access
logs need only `spaces:read`.

Use `--request-id` to trace one request across runtime output. When a source
build or publish fails, read the build's logs:

```bash
sf builds logs bld_123
```

Runtime and access log lines are stored as written, with no redaction: do not
print credentials or personal data from application code. Build logs are
redacted.

## Activity feed

List what changed on a space and who changed it:

```bash
sf activity --space docs
```

Filter by taxonomy code (for example `--code version.promoted`), or read
account-wide events with `--all` and `--since`. Paginate with `--cursor`;
`--limit` defaults to 50 (max 100).

Activity is not a traffic graph, and it is not the channel promotion log:
that is [channel history](/publishing/channels).

## Notifications panel

The shell's **Notifications** panel (the bell) shows running work under
**Happening now** and anything waiting on you under **Needs you**; finished
items merge into the inbox below, alongside comment activity. During a
browser upload, keep the tab open until the upload hands off to the server.

## Related

- [Channels](/publishing/channels): which version is live while you interpret traffic.
- [Teams](/account/teams): who owns the spaces in the feed.

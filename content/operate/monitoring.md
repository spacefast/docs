---
search:
  tags: [logs, analytics, traffic, audit]
title: Monitor a space
description: Read traffic analytics, edge and runtime logs, and the activity feed for a space.
---

A space reports three streams:

- **Analytics**: how much traffic the space received over time.
- **Logs**: what the edge served and what runtime code wrote.
- **Activity**: the audit timeline of what changed and who changed it.

The dashboard shows all three on a space at `my.spacefast.com/acme/docs`:
traffic graphs under **Traffic**, request logs under **Traffic →
Requests**, and the audit feed under **Settings → Advanced**.

Plan tier controls how far back logs go: 48 hours on Free, 30 days on
Personal, unlimited on Work and Enterprise. Analytics windows and their
granularity are the same on every plan.

## Analytics

Read a space's traffic summary:

```bash
sf analytics --space docs
```

The default window is 7 days; choose `48h`, `7d`, or `30d` with `--window`,
and add `--json` for scripts and agents.

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

Spacefast collects runtime lines after the response returns and indexes
them on a separate system, so a line you just triggered takes a while to
appear. An empty page means the lines have not arrived yet, not that
logging is broken. Reading runtime logs needs the `versions:read` scope.
Reading access logs needs only `spaces:read`.

Two filters apply to runtime logs only: `--request-id` reads everything
logged while serving one request, and `--handler` reads what one handler
(a Zero mutation or a Functions handler) logged:

```bash
sf logs runtime --handler checkout
```

When a source build or publish fails, read the build's logs instead:

```bash
sf builds logs bld_123
```

Spacefast stores runtime and access log lines as written, with no
redaction, so do not print credentials or personal data from application
code. Build logs are redacted.

## Activity feed

List what changed on a space and who changed it:

```bash
sf activity --space docs
```

Filter by taxonomy code (for example `--code version.promoted`), or read
account-wide events with `--all` and `--since`. Paginate with `--cursor`;
`--limit` defaults to 50 (max 100).

Activity is not a traffic graph, and it is not the channel promotion log.
For promotions, see [channel history](/publish/versions).

## Related

- [Versions and channels](/publish/versions): which version is live while
  you interpret traffic.
- [Teams](/account/teams): who owns the spaces in the feed.

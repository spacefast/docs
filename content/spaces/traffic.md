---
title: Traffic
description: Read request, visitor, and runtime traffic for a space from the dashboard or CLI.
---

Traffic shows the requests and visitors that a space receives over time. It is
not the [activity](/spaces/activity) audit feed. It is not raw
[logs](#analytics-versus-logs).

## Dashboard

Open a space on `my.spacefast.com/<team>/<space>`. Use its Traffic / Analytics
view for charts over the same windows the CLI supports. Plan tier controls how
much history and granularity you get. See [Limits](/account/billing) for audit
and log retention.

## CLI

```bash
sf analytics --space docs
```

The default window is 7 days. Choose `48h`, `7d`, or `30d`:

```bash
sf analytics --space docs --window 30d
```

Add `--json` for scripts and agents.

## Analytics versus logs

- **Analytics** answers how much traffic a space received over time.
- **Access logs** answer which requests the edge served.
- **Runtime logs** show what Functions or Zero handlers wrote.
- **Build logs** explain a source build or publish failure.

Read recent edge requests:

```bash
sf logs --space docs
```

Follow runtime output:

```bash
sf logs runtime --space docs --follow
```

Use `--request-id` to trace one request across runtime output. Treat logs as
operational data. Do not write credentials or personal data from application
code.

## Related

- [Channels](/publishing/channels) — which version is live while you interpret traffic.

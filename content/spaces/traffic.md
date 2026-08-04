---
title: Traffic
description: Read request, visitor, and runtime traffic for a space from the dashboard or CLI.
---

Traffic answers how a space is being used over time. It is not the
[activity](/spaces/activity) audit feed and not raw [logs](#analytics-versus-logs).

## Dashboard

Open a space on `my.spacefast.com/<team>/<space>` and use its Traffic /
Analytics view for charts over the same windows the CLI supports. Plan tier
controls how much history and granularity you get — see [Limits](/account/limits) for
audit and log retention; analytics history follows the team's plan entitlements.

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
operational data: avoid writing credentials or personal data from application
code.

## Related

- [Activity](/spaces/activity) — who changed what.
- [Channels](/publishing/channels) — which version is live while you interpret traffic.
- [Billing](/account/billing) — plan state that gates retention and meters.

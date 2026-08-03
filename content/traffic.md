---
title: Traffic and analytics
description: Read request, visitor, and runtime traffic for a space.
---

Use `sf analytics` for the traffic series attached to a space:

```bash
sf analytics --space docs
```

The default window is 7 days. Choose `48h`, `7d`, or `30d`:

```bash
sf analytics --space docs --window 30d
```

Add `--json` for scripts and agents. The available history and granularity
depend on the team's plan.

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

---
title: Apply saved settings
description: Push saved space settings that are not live yet onto the serving runtime with sf apply.
---

Some space changes save first and go live when you apply them. Publishing
uploads files and can carry `sf.jsonc` with a version; `sf apply` pushes
already-saved settings onto the serving runtime without creating a new content
version.

```bash
sf apply
```

```bash
sf apply --space docs
```

By default the CLI waits until queued work finishes. Queue without waiting:

```bash
sf apply --space docs --no-wait
```

Tune the wait ceiling with `--wait-timeout` (default 900 seconds).

## When to use apply vs publish

| Goal                                      | Command                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| Ship new or changed files                 | [`sf publish`](/publishing)                                                  |
| Move live/preview to an existing version  | [`sf promote`](/publishing/channels) / [`sf rollback`](/publishing/rollback) |
| Push saved settings that are not live yet | `sf apply`                                                                   |

If you edited serving settings in the dashboard or through the API and the UI
shows them saved but not live, apply is the command that converges the runtime.

File-backed config that should travel with a release still belongs in
[`sf.jsonc`](/spaces/settings) and goes out with the publish.

## Related

- [Configuration](/spaces/settings) — `sf.jsonc` with the version.
- [Channels](/publishing/channels) — version pointers, not settings apply.
- [Variables](/spaces/variables) — env vars via `sf env`.

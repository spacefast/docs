---
title: "wp_cli_command_not_allowed"
description: "This WP-CLI command or flag is outside Spacefast's allowed read, maintenance, and SpacePress commands, so nothing ran."
---

This WP-CLI command or flag is outside Spacefast's allowed read, maintenance, and SpacePress commands, so nothing ran.

**How to resolve:** Use an allowed WP-CLI command (`core version`, `option get/list`, `post get/list`, `term get/list`, `user get/list`, `plugin list/status`, `theme list/status`, `rewrite list/flush`, `cache flush`, `transient get/delete`, `cron event list/run`, `site list`, or `spacepress <subcommand>`) without disallowed global flags (`--exec`, `--require`, `--ssh`, `--http`).

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/wp_cli_command_not_allowed",
  "title": "Wp cli command not allowed",
  "status": 403,
  "detail": "This WP-CLI command or flag is outside Spacefast's allowed read, maintenance, and SpacePress commands, so nothing ran.",
  "code": "wp_cli_command_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

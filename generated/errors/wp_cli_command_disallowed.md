---
title: "wp_cli_command_disallowed"
description: "WP Cloud refused this WP-CLI command before running it, so nothing ran."
---

WP Cloud refused this WP-CLI command before running it, so nothing ran.

**How to resolve:** Check the arguments: pass what follows `wp`, already split. If WP Cloud's task runner disallows the command, make the change through the Spacefast API or the WordPress REST API instead. Retrying the same command fails the same way.

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
  "type": "https://spacefast.com/docs/errors/wp_cli_command_disallowed",
  "title": "Wp cli command disallowed",
  "status": 400,
  "detail": "WP Cloud refused this WP-CLI command before running it, so nothing ran.",
  "code": "wp_cli_command_disallowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

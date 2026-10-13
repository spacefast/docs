---
title: "wp_cli_result_unavailable"
description: "WP Cloud closed the WP-CLI task before the site reported a result, so the outcome is unknown."
---

WP Cloud closed the WP-CLI task before the site reported a result, so the outcome is unknown.

**How to resolve:** Do not retry right away: WP Cloud can still run the command up to a minute later. Wait, check the site with a read-only command, and run the command again only if it did not take effect. If you cannot tell, contact support with the request ID and task ID.

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
  "type": "https://spacefast.com/docs/errors/wp_cli_result_unavailable",
  "title": "Wp cli result unavailable",
  "status": 400,
  "detail": "WP Cloud closed the WP-CLI task before the site reported a result, so the outcome is unknown.",
  "code": "wp_cli_result_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

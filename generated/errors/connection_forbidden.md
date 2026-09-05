---
title: "connection_forbidden"
description: "This credential is not granted the connection it tried to use."
---

This credential is not granted the connection it tried to use.

**How to resolve:** Re-authorize with connectors:execute, or ask the connection's owner to share it with the team.

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
  "type": "https://spacefast.com/docs/errors/connection_forbidden",
  "title": "Connection forbidden",
  "status": 400,
  "detail": "This credential is not granted the connection it tried to use.",
  "code": "connection_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

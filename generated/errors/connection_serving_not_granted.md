---
title: "connection_serving_not_granted"
description: "This team connection has not been granted site serving access."
---

This team connection has not been granted site serving access.

**How to resolve:** Enable serving on a team connection before binding it.

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
  "type": "https://spacefast.com/docs/errors/connection_serving_not_granted",
  "title": "Connection serving not granted",
  "status": 400,
  "detail": "This team connection has not been granted site serving access.",
  "code": "connection_serving_not_granted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

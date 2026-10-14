---
title: "publish_session_expired"
description: "This publish session expired before it was finalized."
---

This publish session expired before it was finalized.

**How to resolve:** Start a new publish. Spacefast keeps declared uploads for 24 hours only.

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
  "type": "https://spacefast.com/docs/errors/publish_session_expired",
  "title": "Publish session expired",
  "status": 400,
  "detail": "This publish session expired before it was finalized.",
  "code": "publish_session_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "publish_session_expired"
description: "The publish upload session expired before it finished."
---

The publish upload session expired before it finished.

**How to resolve:** Start a fresh publish and upload the files again.

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
  "detail": "The publish upload session expired before it finished.",
  "code": "publish_session_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

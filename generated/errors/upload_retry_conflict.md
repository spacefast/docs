---
title: "upload_retry_conflict"
description: "A retry identity is already bound to different input."
---

A retry identity is already bound to different input.

**How to resolve:** Repeat the original input or choose a new operationId.

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
  "type": "https://spacefast.com/docs/errors/upload_retry_conflict",
  "title": "Upload retry conflict",
  "status": 400,
  "detail": "A retry identity is already bound to different input.",
  "code": "upload_retry_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

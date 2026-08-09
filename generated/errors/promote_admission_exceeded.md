---
title: "promote_admission_exceeded"
description: "Too many archived files are being restored for this space right now."
---

Too many archived files are being restored for this space right now.

**How to resolve:** Retry shortly; restores are limited to protect the host.

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
  "type": "https://spacefast.com/docs/errors/promote_admission_exceeded",
  "title": "Promote admission exceeded",
  "status": 400,
  "detail": "Too many archived files are being restored for this space right now.",
  "code": "promote_admission_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

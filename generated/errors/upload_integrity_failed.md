---
title: "upload_integrity_failed"
description: "Stored bytes do not match the upload receipt."
---

Stored bytes do not match the upload receipt.

**How to resolve:** Retry once; if the same error persists, create a new upload.

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
  "type": "https://spacefast.com/docs/errors/upload_integrity_failed",
  "title": "Upload integrity failed",
  "status": 400,
  "detail": "Stored bytes do not match the upload receipt.",
  "code": "upload_integrity_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

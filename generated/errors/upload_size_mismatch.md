---
title: "upload_size_mismatch"
description: "An uploaded file's size does not match the declared size."
---

An uploaded file's size does not match the declared size.

**How to resolve:** Re-check the local file and upload it again.

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
  "type": "https://spacefast.com/docs/errors/upload_size_mismatch",
  "title": "Upload size mismatch",
  "status": 400,
  "detail": "An uploaded file's size does not match the declared size.",
  "code": "upload_size_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

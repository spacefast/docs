---
title: "upload_hash_mismatch"
description: "The uploaded bytes do not hash to the SHA-256 the manifest declares."
---

The uploaded bytes do not hash to the SHA-256 the manifest declares.

**How to resolve:** Re-upload the file, or declare the hash the bytes actually produce.

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
  "type": "https://spacefast.com/docs/errors/upload_hash_mismatch",
  "title": "Upload hash mismatch",
  "status": 400,
  "detail": "The uploaded bytes do not hash to the SHA-256 the manifest declares.",
  "code": "upload_hash_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

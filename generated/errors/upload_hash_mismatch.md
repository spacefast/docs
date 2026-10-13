---
title: "upload_hash_mismatch"
description: "An uploaded file's bytes do not match the declared sha256."
---

An uploaded file's bytes do not match the declared sha256.

**How to resolve:** Re-hash the local file and upload it again.

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
  "detail": "An uploaded file's bytes do not match the declared sha256.",
  "code": "upload_hash_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

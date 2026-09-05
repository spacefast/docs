---
title: "publish_hash_mismatch"
description: "An uploaded file's hash does not match the one the manifest declares."
---

An uploaded file's hash does not match the one the manifest declares.

**How to resolve:** Re-upload the file with the hash the manifest declares, then finalize again.

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
  "type": "https://spacefast.com/docs/errors/publish_hash_mismatch",
  "title": "Publish hash mismatch",
  "status": 400,
  "detail": "An uploaded file's hash does not match the one the manifest declares.",
  "code": "publish_hash_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

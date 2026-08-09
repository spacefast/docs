---
title: "blob_gate_record_missing"
description: "The file behind this download link no longer exists."
---

The file behind this download link no longer exists.

**How to resolve:** Ask the owner for a fresh link; the underlying object was deleted.

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
  "type": "https://spacefast.com/docs/errors/blob_gate_record_missing",
  "title": "Blob gate record missing",
  "status": 400,
  "detail": "The file behind this download link no longer exists.",
  "code": "blob_gate_record_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "storage_unavailable"
description: "The runtime cannot read or persist object storage."
---

The runtime cannot read or persist object storage.

**How to resolve:** Retry on a healthy runtime. If the failure persists, contact support.

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
  "type": "https://spacefast.com/docs/errors/storage_unavailable",
  "title": "Storage unavailable",
  "status": 400,
  "detail": "The runtime cannot read or persist object storage.",
  "code": "storage_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

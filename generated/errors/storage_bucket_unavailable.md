---
title: "storage_bucket_unavailable"
description: "No usable storage bucket is configured for this operation."
---

No usable storage bucket is configured for this operation.

**How to resolve:** Retry the request. If it keeps failing, contact Spacefast support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/storage_bucket_unavailable",
  "title": "Storage bucket unavailable",
  "status": 400,
  "detail": "No usable storage bucket is configured for this operation.",
  "code": "storage_bucket_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

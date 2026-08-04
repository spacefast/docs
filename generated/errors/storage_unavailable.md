---
title: "storage_unavailable"
description: "The Zero runtime could not read or persist object storage."
---

The Zero runtime could not read or persist object storage.

**How to resolve:** Retry on a healthy runtime. Contact support if the failure persists.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/storage_unavailable",
  "title": "Storage unavailable",
  "status": 400,
  "detail": "The Zero runtime could not read or persist object storage.",
  "code": "storage_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "storage_usage_unavailable"
description: "Storage usage could not be computed right now."
---

Storage usage could not be computed right now.

**How to resolve:** Retry shortly.

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
  "type": "https://docs.spacefast.com/docs/errors/storage_usage_unavailable",
  "title": "Storage usage unavailable",
  "status": 400,
  "detail": "Storage usage could not be computed right now.",
  "code": "storage_usage_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

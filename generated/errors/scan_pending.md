---
title: "scan_pending"
description: "The content is still being scanned for safety and cannot be served yet."
---

The content is still being scanned for safety and cannot be served yet.

**How to resolve:** Wait for the scan to finish. Serving resumes automatically once it clears.

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
  "type": "https://docs.spacefast.com/docs/errors/scan_pending",
  "title": "Scan pending",
  "status": 400,
  "detail": "The content is still being scanned for safety and cannot be served yet.",
  "code": "scan_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

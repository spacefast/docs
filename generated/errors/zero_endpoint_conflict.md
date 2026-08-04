---
title: "zero_endpoint_conflict"
description: "Two Zero routes resolve to the same runtime path."
---

Two Zero routes resolve to the same runtime path.

**How to resolve:** Remove the duplicate generated or explicit lookup route and publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_endpoint_conflict",
  "title": "Zero endpoint conflict",
  "status": 400,
  "detail": "Two Zero routes resolve to the same runtime path.",
  "code": "zero_endpoint_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

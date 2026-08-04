---
title: "superseded_by_publish"
description: "A newer publish superseded this operation, so it was skipped."
---

A newer publish superseded this operation, so it was skipped.

**How to resolve:** No action needed. The newer publish already carries the change.

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
  "type": "https://docs.spacefast.com/docs/errors/superseded_by_publish",
  "title": "Superseded by publish",
  "status": 400,
  "detail": "A newer publish superseded this operation, so it was skipped.",
  "code": "superseded_by_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

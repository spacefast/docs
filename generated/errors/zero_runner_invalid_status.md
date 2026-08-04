---
title: "zero_runner_invalid_status"
description: "The Zero runner returned an invalid HTTP status."
---

The Zero runner returned an invalid HTTP status.

**How to resolve:** Ensure endpoint handlers return a status between 100 and 599.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_runner_invalid_status",
  "title": "Zero runner invalid status",
  "status": 400,
  "detail": "The Zero runner returned an invalid HTTP status.",
  "code": "zero_runner_invalid_status",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

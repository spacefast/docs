---
title: "zero_activating"
description: "Zero endpoints are activating."
---

Zero endpoints are activating.

**How to resolve:** Wait for the dedicated runtime move to complete, then retry the request.

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
  "type": "https://spacefast.com/docs/errors/zero_activating",
  "title": "Zero activating",
  "status": 400,
  "detail": "Zero endpoints are activating.",
  "code": "zero_activating",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

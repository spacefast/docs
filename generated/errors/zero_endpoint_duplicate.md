---
title: "zero_endpoint_duplicate"
description: "Two Zero endpoints declare the same method and route."
---

Two Zero endpoints declare the same method and route.

**How to resolve:** Give each endpoint a unique method and route before publishing again.

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
  "type": "https://spacefast.com/docs/errors/zero_endpoint_duplicate",
  "title": "Zero endpoint duplicate",
  "status": 400,
  "detail": "Two Zero endpoints declare the same method and route.",
  "code": "zero_endpoint_duplicate",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_response_header_forbidden"
description: "A Zero endpoint attempted to set a platform-managed response header."
---

A Zero endpoint attempted to set a platform-managed response header.

**How to resolve:** Remove the reserved response header from the endpoint response.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_response_header_forbidden",
  "title": "Zero response header forbidden",
  "status": 400,
  "detail": "A Zero endpoint attempted to set a platform-managed response header.",
  "code": "zero_response_header_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

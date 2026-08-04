---
title: "ip_blocked"
description: "Requests from this IP address are blocked for abuse or policy reasons."
---

Requests from this IP address are blocked for abuse or policy reasons.

**How to resolve:** Contact support with your IP address if you believe this block is in error.

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
  "type": "https://spacefast.com/docs/errors/ip_blocked",
  "title": "Ip blocked",
  "status": 400,
  "detail": "Requests from this IP address are blocked for abuse or policy reasons.",
  "code": "ip_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

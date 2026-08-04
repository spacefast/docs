---
title: "abuse_takedown"
description: "This space was disabled by an abuse takedown and cannot be served or modified."
---

This space was disabled by an abuse takedown and cannot be served or modified.

**How to resolve:** If you believe this is a mistake, contact support with the space id.

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
  "type": "https://spacefast.com/docs/errors/abuse_takedown",
  "title": "Abuse takedown",
  "status": 400,
  "detail": "This space was disabled by an abuse takedown and cannot be served or modified.",
  "code": "abuse_takedown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

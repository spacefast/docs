---
title: "runtime_delivery_lock_timeout"
description: "Another change is still being delivered to this Space, so this request could not take its delivery lease."
---

Another change is still being delivered to this Space, so this request could not take its delivery lease.

**How to resolve:** Nothing in your request needs to change. Wait a moment and retry.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/runtime_delivery_lock_timeout",
  "title": "Runtime delivery lock timeout",
  "status": 400,
  "detail": "Another change is still being delivered to this Space, so this request could not take its delivery lease.",
  "code": "runtime_delivery_lock_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

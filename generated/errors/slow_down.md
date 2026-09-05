---
title: "slow_down"
description: "The device flow was polled faster than its interval allows."
---

The device flow was polled faster than its interval allows.

**How to resolve:** Wait the seconds in `resetSeconds`, then poll again at the interval the device response returned.

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
  "type": "https://spacefast.com/docs/errors/slow_down",
  "title": "Slow down",
  "status": 400,
  "detail": "The device flow was polled faster than its interval allows.",
  "code": "slow_down",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

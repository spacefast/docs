---
title: "slow_down"
description: "The device login is being polled faster than the advised interval."
---

The device login is being polled faster than the advised interval.

**How to resolve:** Increase the polling interval. Aggressive polling invalidates the flow.

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
  "type": "https://docs.spacefast.com/docs/errors/slow_down",
  "title": "Slow down",
  "status": 400,
  "detail": "The device login is being polled faster than the advised interval.",
  "code": "slow_down",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

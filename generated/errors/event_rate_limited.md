---
title: "event_rate_limited"
description: "Too many event submissions came from this client in a short window."
---

Too many event submissions came from this client in a short window.

**How to resolve:** Drop or batch events. Event delivery is best-effort and never required.

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
  "type": "https://spacefast.com/docs/errors/event_rate_limited",
  "title": "Event rate limited",
  "status": 400,
  "detail": "Too many event submissions came from this client in a short window.",
  "code": "event_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

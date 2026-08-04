---
title: "zero_realtime_unavailable"
description: "Zero realtime helpers are unavailable for this endpoint."
---

Zero realtime helpers are unavailable for this endpoint.

**How to resolve:** Enable realtime capability for the handler and rebuild the project.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_realtime_unavailable",
  "title": "Zero realtime unavailable",
  "status": 400,
  "detail": "Zero realtime helpers are unavailable for this endpoint.",
  "code": "zero_realtime_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

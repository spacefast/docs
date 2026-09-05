---
title: "invalid_zero_realtime_event"
description: "The Zero realtime event is not one the runtime accepts."
---

The Zero realtime event is not one the runtime accepts.

**How to resolve:** Send an event the Zero realtime protocol defines.

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
  "type": "https://spacefast.com/docs/errors/invalid_zero_realtime_event",
  "title": "Invalid zero realtime event",
  "status": 400,
  "detail": "The Zero realtime event is not one the runtime accepts.",
  "code": "invalid_zero_realtime_event",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

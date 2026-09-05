---
title: "zero_realtime_forbidden"
description: "The realtime replay token is not valid for this Space and live version."
---

The realtime replay token is not valid for this Space and live version.

**How to resolve:** Request a fresh realtime replay token, then reconnect.

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
  "type": "https://spacefast.com/docs/errors/zero_realtime_forbidden",
  "title": "Zero realtime forbidden",
  "status": 400,
  "detail": "The realtime replay token is not valid for this Space and live version.",
  "code": "zero_realtime_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

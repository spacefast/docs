---
title: "zero_realtime_websocket_forbidden"
description: "The Zero realtime websocket credential is invalid."
---

The Zero realtime websocket credential is invalid.

**How to resolve:** Send the configured realtime client token by query, header, bearer token, or websocket subprotocol.

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
  "type": "https://spacefast.com/docs/errors/zero_realtime_websocket_forbidden",
  "title": "Zero realtime websocket forbidden",
  "status": 400,
  "detail": "The Zero realtime websocket credential is invalid.",
  "code": "zero_realtime_websocket_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

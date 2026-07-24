---
title: "zero_realtime_websocket_forbidden"
description: "The Zero realtime websocket credential is invalid."
---

The Zero realtime websocket credential is invalid.

**How to resolve:** Send the configured realtime client token by query, header, bearer token, or websocket subprotocol.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_websocket_forbidden",
    "message": "The Zero realtime websocket credential is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_realtime_websocket_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

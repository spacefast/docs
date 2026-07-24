---
title: "zero_realtime_message_invalid"
description: "The Zero realtime websocket message is malformed."
---

The Zero realtime websocket message is malformed.

**How to resolve:** Send a supported JSON realtime frame.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_message_invalid",
    "message": "The Zero realtime websocket message is malformed.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_realtime_message_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

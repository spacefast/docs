---
title: "zero_realtime_operation_unsupported"
description: "The Zero realtime websocket operation is unsupported."
---

The Zero realtime websocket operation is unsupported.

**How to resolve:** Use a supported Zero realtime operation such as query.subscribe or query.unsubscribe.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_operation_unsupported",
    "message": "The Zero realtime websocket operation is unsupported.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_realtime_operation_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

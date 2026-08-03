---
title: "invalid_zero_realtime_event"
description: "The Zero realtime event payload is malformed or scoped to the wrong space."
---

The Zero realtime event payload is malformed or scoped to the wrong space.

**How to resolve:** Send a valid Zero realtime event for the space in the request path.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_zero_realtime_event",
    "message": "The Zero realtime event payload is malformed or scoped to the wrong space.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_zero_realtime_event",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_realtime_unavailable"
description: "Zero realtime helpers are unavailable for this endpoint."
---

Zero realtime helpers are unavailable for this endpoint.

**How to resolve:** Enable realtime capability for the handler and rebuild the project.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_unavailable",
    "message": "Zero realtime helpers are unavailable for this endpoint.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_realtime_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

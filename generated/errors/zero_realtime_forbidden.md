---
title: "zero_realtime_forbidden"
description: "The Zero realtime event intake credential is invalid."
---

The Zero realtime event intake credential is invalid.

**How to resolve:** Send the configured bearer token or a valid signed realtime event.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_forbidden",
    "message": "The Zero realtime event intake credential is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_realtime_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

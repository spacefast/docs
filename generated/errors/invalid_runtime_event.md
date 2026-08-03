---
title: "invalid_runtime_event"
description: "The runtime event payload is not recognized."
---

The runtime event payload is not recognized.

**How to resolve:** Verify the event shape matches the runtime callback contract.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_runtime_event",
    "message": "The runtime event payload is not recognized.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_runtime_event",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "invalid_webhook_events"
description: "One or more webhook event codes are not in the event taxonomy."
---

One or more webhook event codes are not in the event taxonomy.

**How to resolve:** Subscribe only to documented activity event codes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_webhook_events",
    "message": "One or more webhook event codes are not in the event taxonomy.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_webhook_events",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

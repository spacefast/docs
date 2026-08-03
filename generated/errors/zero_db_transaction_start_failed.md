---
title: "zero_db_transaction_start_failed"
description: "The Zero database transaction could not be started."
---

The Zero database transaction could not be started.

**How to resolve:** Check database connectivity and retry the mutation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_start_failed",
    "message": "The Zero database transaction could not be started.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_transaction_start_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

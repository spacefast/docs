---
title: "zero_db_transaction_rollback_failed"
description: "The Zero database transaction could not be rolled back cleanly."
---

The Zero database transaction could not be rolled back cleanly.

**How to resolve:** Inspect the affected database state before retrying, then report the failure.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_rollback_failed",
    "message": "The Zero database transaction could not be rolled back cleanly.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_transaction_rollback_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

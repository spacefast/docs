---
title: "zero_db_transaction_commit_failed"
description: "The Zero database transaction could not be committed."
---

The Zero database transaction could not be committed.

**How to resolve:** Retry after checking database connectivity and transaction conflicts.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_commit_failed",
    "message": "The Zero database transaction could not be committed.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_transaction_commit_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

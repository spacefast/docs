---
title: "zero_db_transaction_missing"
description: "The Zero runner tried to finish a database transaction that was not active."
---

The Zero runner tried to finish a database transaction that was not active.

**How to resolve:** Rebuild with the current Zero runner and report the failure if it repeats.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_missing",
    "message": "The Zero runner tried to finish a database transaction that was not active.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_transaction_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

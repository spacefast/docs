---
title: "zero_db_transaction_active"
description: "The Zero runner tried to start a database transaction while one was already active."
---

The Zero runner tried to start a database transaction while one was already active.

**How to resolve:** Rebuild with the current Zero runner and report the failure if it repeats.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_active",
    "message": "The Zero runner tried to start a database transaction while one was already active.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_transaction_active",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

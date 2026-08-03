---
title: "zero_db_transaction_invalid"
description: "The Zero database transaction mode is invalid."
---

The Zero database transaction mode is invalid.

**How to resolve:** Use a supported generated transaction mode.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_transaction_invalid",
    "message": "The Zero database transaction mode is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_transaction_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

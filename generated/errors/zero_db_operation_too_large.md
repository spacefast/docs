---
title: "zero_db_operation_too_large"
description: "The Zero database operation payload is too large."
---

The Zero database operation payload is too large.

**How to resolve:** Reduce query parameters or batch size and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_operation_too_large",
    "message": "The Zero database operation payload is too large.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_operation_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

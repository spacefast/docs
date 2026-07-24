---
title: "zero_db_too_many_params"
description: "The Zero database operation has too many parameters."
---

The Zero database operation has too many parameters.

**How to resolve:** Reduce the number of bound parameters or split the operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_too_many_params",
    "message": "The Zero database operation has too many parameters.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_too_many_params",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

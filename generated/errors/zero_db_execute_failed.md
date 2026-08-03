---
title: "zero_db_execute_failed"
description: "A Zero database write failed."
---

A Zero database write failed.

**How to resolve:** Inspect the mutation, schema, and database logs, then retry after fixing the SQL issue.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_execute_failed",
    "message": "A Zero database write failed.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_execute_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

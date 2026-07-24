---
title: "zero_db_query_failed"
description: "A Zero database read failed."
---

A Zero database read failed.

**How to resolve:** Inspect the query, schema, and database logs, then retry after fixing the SQL issue.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_query_failed",
    "message": "A Zero database read failed.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_query_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

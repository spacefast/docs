---
title: "zero_db_connect_failed"
description: "The Zero runner could not connect to the configured database."
---

The Zero runner could not connect to the configured database.

**How to resolve:** Verify DATABASE_URL or the generated MySQL connection variables and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_connect_failed",
    "message": "The Zero runner could not connect to the configured database.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_connect_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

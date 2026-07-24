---
title: "zero_migration_failed"
description: "The Zero database migration command failed during finalize."
---

The Zero database migration command failed during finalize.

**How to resolve:** Inspect the migration and database logs, fix the schema issue, and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_migration_failed",
    "message": "The Zero database migration command failed during finalize.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_migration_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

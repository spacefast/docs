---
title: "zero_db_url_missing"
description: "No Zero database URL is configured."
---

No Zero database URL is configured.

**How to resolve:** Configure DATABASE_URL or finalize the version with database connection variables.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_url_missing",
    "message": "No Zero database URL is configured.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_url_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

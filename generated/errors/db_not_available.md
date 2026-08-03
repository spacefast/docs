---
title: "db_not_available"
description: "The live version has no database to read."
---

The live version has no database to read.

**How to resolve:** Publish a Zero app, or declare `"database": true` under `runtime` in sf.jsonc for a Functions app.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "db_not_available",
    "message": "The live version has no database to read.",
    "docsUrl": "https://docs.spacefast.com/errors/db_not_available",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

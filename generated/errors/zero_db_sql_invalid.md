---
title: "zero_db_sql_invalid"
description: "The Zero runner rejected unsafe or unsupported SQL."
---

The Zero runner rejected unsafe or unsupported SQL.

**How to resolve:** Use generated Zero query helpers and avoid multiple statements or unsupported SQL forms.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_sql_invalid",
    "message": "The Zero runner rejected unsafe or unsupported SQL.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_sql_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

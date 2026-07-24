---
title: "zero_db_url_invalid"
description: "The Zero database URL is malformed."
---

The Zero database URL is malformed.

**How to resolve:** Set DATABASE_URL or the generated database variables to a valid MySQL connection URL.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_url_invalid",
    "message": "The Zero database URL is malformed.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_url_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

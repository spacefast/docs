---
title: "zero_dump_query_invalid"
description: "The Zero database dump query parameters are invalid."
---

The Zero database dump query parameters are invalid.

**How to resolve:** Use valid table, limit, and cursor parameters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_dump_query_invalid",
    "message": "The Zero database dump query parameters are invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_dump_query_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

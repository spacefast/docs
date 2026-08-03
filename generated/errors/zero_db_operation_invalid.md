---
title: "zero_db_operation_invalid"
description: "The Zero database bridge received an invalid operation payload."
---

The Zero database bridge received an invalid operation payload.

**How to resolve:** Use the generated Zero database client instead of constructing bridge calls manually.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_operation_invalid",
    "message": "The Zero database bridge received an invalid operation payload.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_operation_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

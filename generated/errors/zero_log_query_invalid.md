---
title: "zero_log_query_invalid"
description: "The Zero log query parameters are invalid."
---

The Zero log query parameters are invalid.

**How to resolve:** Use valid cursor, limit, mutationName, and requestId parameters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_log_query_invalid",
    "message": "The Zero log query parameters are invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_log_query_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

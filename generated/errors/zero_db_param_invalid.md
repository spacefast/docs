---
title: "zero_db_param_invalid"
description: "A Zero database query parameter has an unsupported value."
---

A Zero database query parameter has an unsupported value.

**How to resolve:** Pass JSON-serializable scalar values or nulls to generated database helpers.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_param_invalid",
    "message": "A Zero database query parameter has an unsupported value.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_param_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

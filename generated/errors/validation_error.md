---
title: "validation_error"
description: "A request field failed validation."
---

A request field failed validation.

**How to resolve:** Fix the field referenced by param and details, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "validation_error",
    "message": "A request field failed validation.",
    "docsUrl": "https://spacefast.com/docs/errors/validation_error",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

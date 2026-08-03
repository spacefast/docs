---
title: "internal_error"
description: "Something went wrong on our side."
---

Something went wrong on our side.

**How to resolve:** Retry the request. If it persists, contact support with the requestId.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "internal_error",
    "message": "Something went wrong on our side.",
    "docsUrl": "https://docs.spacefast.com/errors/internal_error",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

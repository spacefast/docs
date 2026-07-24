---
title: "invalid_request"
description: "The request is malformed."
---

The request is malformed.

**How to resolve:** Fix the field referenced by param and details, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request is malformed.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_request",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

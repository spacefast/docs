---
title: "principal_space_mismatch"
description: "The space does not belong to the principal in the request."
---

The space does not belong to the principal in the request.

**How to resolve:** Use the space's owning team or account in the request path.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "principal_space_mismatch",
    "message": "The space does not belong to the principal in the request.",
    "docsUrl": "https://docs.spacefast.com/errors/principal_space_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

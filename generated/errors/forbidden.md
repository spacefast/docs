---
title: "forbidden"
description: "The credential is valid but does not allow this action."
---

The credential is valid but does not allow this action.

**How to resolve:** Use a credential whose policy grants this action on this resource.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "forbidden",
    "message": "The credential is valid but does not allow this action.",
    "docsUrl": "https://docs.spacefast.com/errors/forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

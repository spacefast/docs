---
title: "tenant_suspended"
description: "The tenant is suspended, so its resources cannot be served or modified."
---

The tenant is suspended, so its resources cannot be served or modified.

**How to resolve:** Resolve the suspension with support.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "tenant_suspended",
    "message": "The tenant is suspended, so its resources cannot be served or modified.",
    "docsUrl": "https://spacefast.com/docs/errors/tenant_suspended",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

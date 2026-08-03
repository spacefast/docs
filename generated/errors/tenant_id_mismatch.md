---
title: "tenant_id_mismatch"
description: "The resource belongs to a different tenant than the request."
---

The resource belongs to a different tenant than the request.

**How to resolve:** Use a credential and tenant header matching the resource's tenant.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "tenant_id_mismatch",
    "message": "The resource belongs to a different tenant than the request.",
    "docsUrl": "https://docs.spacefast.com/errors/tenant_id_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

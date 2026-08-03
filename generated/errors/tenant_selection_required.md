---
title: "tenant_selection_required"
description: "The credential spans multiple tenants, so the request must select one."
---

The credential spans multiple tenants, so the request must select one.

**How to resolve:** Send the tenant header naming the tenant to act on.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "tenant_selection_required",
    "message": "The credential spans multiple tenants, so the request must select one.",
    "docsUrl": "https://docs.spacefast.com/errors/tenant_selection_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "transfer_cross_tenant_unsupported"
description: "Spaces cannot be transferred across tenants."
---

Spaces cannot be transferred across tenants.

**How to resolve:** Export the space and import it under the target tenant instead.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_cross_tenant_unsupported",
    "message": "Spaces cannot be transferred across tenants.",
    "docsUrl": "https://docs.spacefast.com/errors/transfer_cross_tenant_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

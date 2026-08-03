---
title: "platform_tenant_immutable_client"
description: "The tenant's provider client cannot be changed."
---

The tenant's provider client cannot be changed.

**How to resolve:** Create a new tenant with the desired provider client instead.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "platform_tenant_immutable_client",
    "message": "The tenant's provider client cannot be changed.",
    "docsUrl": "https://docs.spacefast.com/errors/platform_tenant_immutable_client",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

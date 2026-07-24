---
title: "tenant_not_granted"
description: "Your credential has no grant on the requested tenant."
---

Your credential has no grant on the requested tenant.

**How to resolve:** Use a credential issued for this tenant.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "tenant_not_granted",
    "message": "Your credential has no grant on the requested tenant.",
    "docsUrl": "https://spacefast.com/docs/errors/tenant_not_granted",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

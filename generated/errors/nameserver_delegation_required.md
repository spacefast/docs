---
title: "nameserver_delegation_required"
description: "This operation requires the domain to be delegated to Spacefast nameservers."
---

This operation requires the domain to be delegated to Spacefast nameservers.

**How to resolve:** Update the domain's nameservers at the registrar, then retry once delegation propagates.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "nameserver_delegation_required",
    "message": "This operation requires the domain to be delegated to Spacefast nameservers.",
    "docsUrl": "https://docs.spacefast.com/errors/nameserver_delegation_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

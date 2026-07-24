---
title: "tenant_past_due"
description: "The tenant is past due; mutations are rejected while serving continues."
---

The tenant is past due; mutations are rejected while serving continues.

**How to resolve:** Settle the outstanding balance to restore full access.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "tenant_past_due",
    "message": "The tenant is past due; mutations are rejected while serving continues.",
    "docsUrl": "https://spacefast.com/docs/errors/tenant_past_due",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

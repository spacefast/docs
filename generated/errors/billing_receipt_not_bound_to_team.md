---
title: "billing_receipt_not_bound_to_team"
description: "The store purchase was made under a different account token than this team's."
---

The store purchase was made under a different account token than this team's.

**How to resolve:** Verify the purchase from the team that initiated it, or contact support to rebind it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "billing_receipt_not_bound_to_team",
    "message": "The store purchase was made under a different account token than this team's.",
    "docsUrl": "https://spacefast.com/docs/errors/billing_receipt_not_bound_to_team",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

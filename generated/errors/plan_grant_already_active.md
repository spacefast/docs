---
title: "plan_grant_already_active"
description: "The team already holds an active operator grant for this plan."
---

The team already holds an active operator grant for this plan.

**How to resolve:** Revoke the existing grant first, or grant a different plan.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "plan_grant_already_active",
    "message": "The team already holds an active operator grant for this plan.",
    "docsUrl": "https://docs.spacefast.com/errors/plan_grant_already_active",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

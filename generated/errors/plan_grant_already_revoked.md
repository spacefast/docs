---
title: "plan_grant_already_revoked"
description: "This plan grant was already revoked."
---

This plan grant was already revoked.

**How to resolve:** Nothing to do; create a new grant if the team should regain the plan.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "plan_grant_already_revoked",
    "message": "This plan grant was already revoked.",
    "docsUrl": "https://spacefast.com/docs/errors/plan_grant_already_revoked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_requires_dedicated_plan"
description: "Zero endpoints require a plan with dedicated runtime isolation."
---

Zero endpoints require a plan with dedicated runtime isolation.

**How to resolve:** Upgrade the team to a plan that includes Zero and dedicated runtime, then publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_requires_dedicated_plan",
    "message": "Zero endpoints require a plan with dedicated runtime isolation.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_requires_dedicated_plan",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

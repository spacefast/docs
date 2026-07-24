---
title: "placement_mode_requires_plan"
description: "The requested placement mode requires a plan entitlement."
---

The requested placement mode requires a plan entitlement.

**How to resolve:** Upgrade the team plan or choose shared placement.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "placement_mode_requires_plan",
    "message": "The requested placement mode requires a plan entitlement.",
    "docsUrl": "https://spacefast.com/docs/errors/placement_mode_requires_plan",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "move_target_capacity_lost"
description: "The selected move target no longer has capacity for the space."
---

The selected move target no longer has capacity for the space.

**How to resolve:** Retry the move with a different target or after capacity is freed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "move_target_capacity_lost",
    "message": "The selected move target no longer has capacity for the space.",
    "docsUrl": "https://docs.spacefast.com/errors/move_target_capacity_lost",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

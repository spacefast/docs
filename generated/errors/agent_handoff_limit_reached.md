---
title: "agent_handoff_limit_reached"
description: "This user already has the maximum number of pending handoffs for the Space."
---

This user already has the maximum number of pending handoffs for the Space.

**How to resolve:** Redeem or revoke an existing pending handoff for the Space before creating another.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "agent_handoff_limit_reached",
    "message": "This user already has the maximum number of pending handoffs for the Space.",
    "docsUrl": "https://spacefast.com/docs/errors/agent_handoff_limit_reached",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

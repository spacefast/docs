---
title: "invitation_not_pending"
description: "The invitation is no longer pending."
---

The invitation is no longer pending.

**How to resolve:** Create a new invitation if the member still needs to join.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invitation_not_pending",
    "message": "The invitation is no longer pending.",
    "docsUrl": "https://docs.spacefast.com/errors/invitation_not_pending",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

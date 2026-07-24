---
title: "invitation_expired"
description: "The invitation has expired and can no longer be accepted."
---

The invitation has expired and can no longer be accepted.

**How to resolve:** Ask a team admin to send a fresh invitation, then accept the new one.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invitation_expired",
    "message": "The invitation has expired and can no longer be accepted.",
    "docsUrl": "https://spacefast.com/docs/errors/invitation_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

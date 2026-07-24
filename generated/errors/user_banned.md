---
title: "user_banned"
description: "This user is banned for a policy or abuse violation and cannot perform this action."
---

This user is banned for a policy or abuse violation and cannot perform this action.

**How to resolve:** Contact support to appeal the ban if you believe it is a mistake.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "user_banned",
    "message": "This user is banned for a policy or abuse violation and cannot perform this action.",
    "docsUrl": "https://spacefast.com/docs/errors/user_banned",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

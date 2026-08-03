---
title: "account_suspended"
description: "This account is suspended for a policy or abuse violation and cannot be used."
---

This account is suspended for a policy or abuse violation and cannot be used.

**How to resolve:** Contact support to review the suspension if you believe it is a mistake.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "account_suspended",
    "message": "This account is suspended for a policy or abuse violation and cannot be used.",
    "docsUrl": "https://docs.spacefast.com/errors/account_suspended",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

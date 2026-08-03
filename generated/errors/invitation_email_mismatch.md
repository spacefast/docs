---
title: "invitation_email_mismatch"
description: "This invitation was addressed to a different email than the accepting user."
---

This invitation was addressed to a different email than the accepting user.

**How to resolve:** Sign in as the invited email, or ask an admin to invite your current address.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invitation_email_mismatch",
    "message": "This invitation was addressed to a different email than the accepting user.",
    "docsUrl": "https://docs.spacefast.com/errors/invitation_email_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

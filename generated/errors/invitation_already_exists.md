---
title: "invitation_already_exists"
description: "An invitation for this email already exists on the team."
---

An invitation for this email already exists on the team.

**How to resolve:** Resend the existing invitation instead of creating a new one.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invitation_already_exists",
    "message": "An invitation for this email already exists on the team.",
    "docsUrl": "https://spacefast.com/docs/errors/invitation_already_exists",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

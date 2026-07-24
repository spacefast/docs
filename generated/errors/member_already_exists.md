---
title: "member_already_exists"
description: "This user is already a member of the team."
---

This user is already a member of the team.

**How to resolve:** Update the existing member's role instead of inviting again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "member_already_exists",
    "message": "This user is already a member of the team.",
    "docsUrl": "https://spacefast.com/docs/errors/member_already_exists",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

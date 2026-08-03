---
title: "team_member_quota_exceeded"
description: "Inviting this person would exceed the team's seat limit."
---

Inviting this person would exceed the team's seat limit.

**How to resolve:** Remove a team member or cancel a pending invitation to free a seat. Pending invitations count toward the limit.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "team_member_quota_exceeded",
    "message": "Inviting this person would exceed the team's seat limit.",
    "docsUrl": "https://docs.spacefast.com/errors/team_member_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

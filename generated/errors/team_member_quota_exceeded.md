---
title: "team_member_quota_exceeded"
description: "Inviting this person would exceed the team's seat limit."
---

Inviting this person would exceed the team's seat limit.

**How to resolve:** Remove a team member or cancel a pending invitation to free a seat. Pending invitations count toward the limit.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/team_member_quota_exceeded",
  "title": "Team member quota exceeded",
  "status": 400,
  "detail": "Inviting this person would exceed the team's seat limit.",
  "code": "team_member_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

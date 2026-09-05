---
title: "team_member_quota_exceeded"
description: "The team is at its seat limit, counting members and pending invitations."
---

The team is at its seat limit, counting members and pending invitations.

**How to resolve:** Remove a member or cancel a pending invitation, or move the team to a plan with more seats.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/team_member_quota_exceeded",
  "title": "Team member quota exceeded",
  "status": 400,
  "detail": "The team is at its seat limit, counting members and pending invitations.",
  "code": "team_member_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

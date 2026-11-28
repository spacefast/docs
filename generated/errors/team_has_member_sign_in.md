---
title: "team_has_member_sign_in"
description: "This team has member sign-in set up, so it can't become a subteam."
---

This team has member sign-in set up, so it can't become a subteam.

**How to resolve:** Ask a team owner to remove member sign-in in the team's Access settings, then move the team.

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
  "type": "https://spacefast.com/docs/errors/team_has_member_sign_in",
  "title": "Team has member sign in",
  "status": 422,
  "detail": "This team has member sign-in set up, so it can't become a subteam.",
  "code": "team_has_member_sign_in",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

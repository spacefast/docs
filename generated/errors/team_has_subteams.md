---
title: "team_has_subteams"
description: "This team still has subteams."
---

This team still has subteams.

**How to resolve:** Delete every subteam before deleting this team.

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
  "type": "https://spacefast.com/docs/errors/team_has_subteams",
  "title": "Team has subteams",
  "status": 400,
  "detail": "This team still has subteams.",
  "code": "team_has_subteams",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

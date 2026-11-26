---
title: "parent_team_access_requires_subteam"
description: "Sharing with everyone in the parent team applies only to a space owned by a subteam; this team has no parent team."
---

Sharing with everyone in the parent team applies only to a space owned by a subteam; this team has no parent team.

**How to resolve:** Choose `private` or `public` here, or set parent-team access on a space owned by a subteam.

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
  "type": "https://spacefast.com/docs/errors/parent_team_access_requires_subteam",
  "title": "Parent team access requires subteam",
  "status": 422,
  "detail": "Sharing with everyone in the parent team applies only to a space owned by a subteam; this team has no parent team.",
  "code": "parent_team_access_requires_subteam",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

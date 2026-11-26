---
title: "team_design_system_inherited"
description: "This subteam uses its parent team's design system, which is read-only here."
---

This subteam uses its parent team's design system, which is read-only here.

**How to resolve:** Ask the user whether to change the system on the parent team, which reaches every subteam using it, or to give this team its own by sending `changes: { parentSystem: "override" }` to updateTeamDesignSystem.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_inherited",
  "title": "Team design system inherited",
  "status": 422,
  "detail": "This subteam uses its parent team's design system, which is read-only here.",
  "code": "team_design_system_inherited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

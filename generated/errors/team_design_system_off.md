---
title: "team_design_system_off"
description: "This subteam chose to use no design system, so it has nothing to save into."
---

This subteam chose to use no design system, so it has nothing to save into.

**How to resolve:** Ask the user whether to use the parent team's system by sending `changes: { parentSystem: "adopt" }` to updateTeamDesignSystem, or this team's own with `changes: { parentSystem: "override" }`.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_off",
  "title": "Team design system off",
  "status": 422,
  "detail": "This subteam chose to use no design system, so it has nothing to save into.",
  "code": "team_design_system_off",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

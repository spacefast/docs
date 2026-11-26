---
title: "team_design_system_not_shared"
description: "The parent team isn't sharing a saved design system with this team."
---

The parent team isn't sharing a saved design system with this team.

**How to resolve:** Ask a parent team admin to share one, or save this team's own design system.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_not_shared",
  "title": "Team design system not shared",
  "status": 422,
  "detail": "The parent team isn't sharing a saved design system with this team.",
  "code": "team_design_system_not_shared",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "team_design_system_entry_not_found"
description: "The entry is missing, archived, or belongs to a different record type."
---

The entry is missing, archived, or belongs to a different record type.

**How to resolve:** Use an active entry ID for updates or removals; omit the ID to create a new entry.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_entry_not_found",
  "title": "Team design system entry not found",
  "status": 400,
  "detail": "The entry is missing, archived, or belongs to a different record type.",
  "code": "team_design_system_entry_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

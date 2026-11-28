---
title: "new_subteam_default_requires_root_team"
description: "Only a root team sets the default its new subteams start with; this team is a subteam."
---

Only a root team sets the default its new subteams start with; this team is a subteam.

**How to resolve:** Set it on the parent team, or change this subteam's own new-space default instead.

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
  "type": "https://spacefast.com/docs/errors/new_subteam_default_requires_root_team",
  "title": "New subteam default requires root team",
  "status": 422,
  "detail": "Only a root team sets the default its new subteams start with; this team is a subteam.",
  "code": "new_subteam_default_requires_root_team",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

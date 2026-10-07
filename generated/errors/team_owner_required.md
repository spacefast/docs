---
title: "team_owner_required"
description: "Only a team owner can change this setting."
---

Only a team owner can change this setting.

**How to resolve:** Ask a team owner to change it.

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
  "type": "https://spacefast.com/docs/errors/team_owner_required",
  "title": "Team owner required",
  "status": 400,
  "detail": "Only a team owner can change this setting.",
  "code": "team_owner_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

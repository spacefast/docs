---
title: "team_scope_mismatch"
description: "The credential acts for a different team than the request names."
---

The credential acts for a different team than the request names.

**How to resolve:** Drop the team reference, or call with a credential scoped to that team.

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
  "type": "https://spacefast.com/docs/errors/team_scope_mismatch",
  "title": "Team scope mismatch",
  "status": 400,
  "detail": "The credential acts for a different team than the request names.",
  "code": "team_scope_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

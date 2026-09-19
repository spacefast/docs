---
title: "system_team_immutable"
description: "This team is operated by Spacefast. Its name, slug and lifecycle are fixed, so renaming or deleting it was refused."
---

This team is operated by Spacefast. Its name, slug and lifecycle are fixed, so renaming or deleting it was refused.

**How to resolve:** Leave the team's identity as it is. If you need a team you control, create your own and move your Spaces to it.

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
  "type": "https://spacefast.com/docs/errors/system_team_immutable",
  "title": "System team immutable",
  "status": 400,
  "detail": "This team is operated by Spacefast. Its name, slug and lifecycle are fixed, so renaming or deleting it was refused.",
  "code": "system_team_immutable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

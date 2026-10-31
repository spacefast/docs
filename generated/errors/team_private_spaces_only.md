---
title: "team_private_spaces_only"
description: "This team allows private spaces only, so nothing in it can be public."
---

This team allows private spaces only, so nothing in it can be public.

**How to resolve:** Keep the space private and share it with people or links, or ask a team owner or admin to turn off Private spaces only.

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
  "type": "https://spacefast.com/docs/errors/team_private_spaces_only",
  "title": "Team private spaces only",
  "status": 400,
  "detail": "This team allows private spaces only, so nothing in it can be public.",
  "code": "team_private_spaces_only",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

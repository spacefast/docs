---
title: "team_members_missing_two_factor"
description: "Some team members don't have two-factor authentication on yet."
---

Some team members don't have two-factor authentication on yet.

**How to resolve:** Ask the members listed in `details.members` to turn on two-factor in Account → Security, or remove them, then require it again.

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
  "type": "https://spacefast.com/docs/errors/team_members_missing_two_factor",
  "title": "Team members missing two factor",
  "status": 400,
  "detail": "Some team members don't have two-factor authentication on yet.",
  "code": "team_members_missing_two_factor",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

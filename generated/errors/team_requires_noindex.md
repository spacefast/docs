---
title: "team_requires_noindex"
description: "This team hides every space from search engines."
---

This team hides every space from search engines.

**How to resolve:** Leave noindex on, or ask a team owner or admin to turn off Hide from search engines for the team.

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
  "type": "https://spacefast.com/docs/errors/team_requires_noindex",
  "title": "Team requires noindex",
  "status": 400,
  "detail": "This team hides every space from search engines.",
  "code": "team_requires_noindex",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

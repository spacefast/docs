---
title: "team_skill_not_found"
description: "No team skill with this key exists."
---

No team skill with this key exists.

**How to resolve:** List the team's skills and use a key from that list.

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
  "type": "https://spacefast.com/docs/errors/team_skill_not_found",
  "title": "Team skill not found",
  "status": 400,
  "detail": "No team skill with this key exists.",
  "code": "team_skill_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

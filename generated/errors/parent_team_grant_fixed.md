---
title: "parent_team_grant_fixed"
description: "A parent-team grant is fixed to viewing and commenting on the whole live space and cannot be replaced."
---

A parent-team grant is fixed to viewing and commenting on the whole live space and cannot be replaced.

**How to resolve:** Revoke the parent-team grant and create the access you want instead.

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
  "type": "https://spacefast.com/docs/errors/parent_team_grant_fixed",
  "title": "Parent team grant fixed",
  "status": 422,
  "detail": "A parent-team grant is fixed to viewing and commenting on the whole live space and cannot be replaced.",
  "code": "parent_team_grant_fixed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "wp_cloud_assignment_team_mismatch"
description: "The provider site belongs to a different team than the assignment names."
---

The provider site belongs to a different team than the assignment names.

**How to resolve:** Assign a provider site owned by the same team.

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
  "type": "https://spacefast.com/docs/errors/wp_cloud_assignment_team_mismatch",
  "title": "Wp cloud assignment team mismatch",
  "status": 400,
  "detail": "The provider site belongs to a different team than the assignment names.",
  "code": "wp_cloud_assignment_team_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

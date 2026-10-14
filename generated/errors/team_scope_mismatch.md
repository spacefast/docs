---
title: "team_scope_mismatch"
description: "The requested team conflicts with the team this credential or resource is bound to."
---

The requested team conflicts with the team this credential or resource is bound to.

**How to resolve:** Drop the team parameter to act on the bound team, or use a credential for the team you named.

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
  "detail": "The requested team conflicts with the team this credential or resource is bound to.",
  "code": "team_scope_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

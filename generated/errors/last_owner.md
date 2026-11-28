---
title: "last_owner"
description: "The last owner of a team cannot be removed or downgraded. While the team requires SSO, that means the last owner with two-factor."
---

The last owner of a team cannot be removed or downgraded. While the team requires SSO, that means the last owner with two-factor.

**How to resolve:** Promote another member to owner first. While the team requires SSO, that owner must turn on two-factor too.

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
  "type": "https://spacefast.com/docs/errors/last_owner",
  "title": "Last owner",
  "status": 422,
  "detail": "The last owner of a team cannot be removed or downgraded. While the team requires SSO, that means the last owner with two-factor.",
  "code": "last_owner",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

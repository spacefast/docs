---
title: "operator_admin_automattician_required"
description: "Only a WordPress.com-confirmed Automattician can be granted the read-only admin role."
---

Only a WordPress.com-confirmed Automattician can be granted the read-only admin role.

**How to resolve:** Ask them to sign in with their Automattic WordPress.com account so it is confirmed, then grant the role again.

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
  "type": "https://spacefast.com/docs/errors/operator_admin_automattician_required",
  "title": "Operator admin automattician required",
  "status": 422,
  "detail": "Only a WordPress.com-confirmed Automattician can be granted the read-only admin role.",
  "code": "operator_admin_automattician_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

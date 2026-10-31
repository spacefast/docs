---
title: "superadmin_automattic_email_required"
description: "The user needs a verified @automattic.com email address before receiving the superadmin role."
---

The user needs a verified @automattic.com email address before receiving the superadmin role.

**How to resolve:** Ask the user to add and verify an @automattic.com address in account email settings. Then grant the role again.

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
  "type": "https://spacefast.com/docs/errors/superadmin_automattic_email_required",
  "title": "Superadmin automattic email required",
  "status": 400,
  "detail": "The user needs a verified @automattic.com email address before receiving the superadmin role.",
  "code": "superadmin_automattic_email_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

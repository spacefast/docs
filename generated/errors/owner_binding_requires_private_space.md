---
title: "owner_binding_requires_private_space"
description: "Personal roles need a private Space, not shared by link or password, and your own personal connection."
---

Personal roles need a private Space, not shared by link or password, and your own personal connection.

**How to resolve:** Make the Space private and remove its share links and passwords, then choose one of your personal connections, or declare the role as team.

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
  "type": "https://spacefast.com/docs/errors/owner_binding_requires_private_space",
  "title": "Owner binding requires private space",
  "status": 422,
  "detail": "Personal roles need a private Space, not shared by link or password, and your own personal connection.",
  "code": "owner_binding_requires_private_space",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

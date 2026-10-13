---
title: "visitor_role_not_bindable"
description: "Visitors connect their own accounts for this role."
---

Visitors connect their own accounts for this role.

**How to resolve:** Declare a team or owner role to bind a connection.

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
  "type": "https://spacefast.com/docs/errors/visitor_role_not_bindable",
  "title": "Visitor role not bindable",
  "status": 400,
  "detail": "Visitors connect their own accounts for this role.",
  "code": "visitor_role_not_bindable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

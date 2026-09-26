---
title: "owner_binding_requires_private_space"
description: "Owner connections require a private Space."
---

Owner connections require a private Space.

**How to resolve:** Make the Space private and choose your own personal connection.

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
  "status": 400,
  "detail": "Owner connections require a private Space.",
  "code": "owner_binding_requires_private_space",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

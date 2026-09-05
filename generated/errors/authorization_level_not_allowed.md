---
title: "authorization_level_not_allowed"
description: "The credential's authorization level does not allow this request."
---

The credential's authorization level does not allow this request.

**How to resolve:** Call with a user-owned interactive agent grant, and set the grant's authorization level to `user` or `team`.

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
  "type": "https://spacefast.com/docs/errors/authorization_level_not_allowed",
  "title": "Authorization level not allowed",
  "status": 400,
  "detail": "The credential's authorization level does not allow this request.",
  "code": "authorization_level_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

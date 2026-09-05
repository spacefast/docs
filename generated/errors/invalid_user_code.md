---
title: "invalid_user_code"
description: "The user code is unknown or was already handled."
---

The user code is unknown or was already handled.

**How to resolve:** Run `sf login` again and enter the fresh code it prints.

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
  "type": "https://spacefast.com/docs/errors/invalid_user_code",
  "title": "Invalid user code",
  "status": 400,
  "detail": "The user code is unknown or was already handled.",
  "code": "invalid_user_code",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

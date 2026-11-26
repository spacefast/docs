---
title: "bar_session_invalid"
description: "The Space bar's sign-in has expired or was revoked."
---

The Space bar's sign-in has expired or was revoked.

**How to resolve:** Sign in to the bar again. It opens a Spacefast window and comes right back.

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
  "type": "https://spacefast.com/docs/errors/bar_session_invalid",
  "title": "Bar session invalid",
  "status": 422,
  "detail": "The Space bar's sign-in has expired or was revoked.",
  "code": "bar_session_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

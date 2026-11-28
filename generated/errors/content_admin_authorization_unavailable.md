---
title: "content_admin_authorization_unavailable"
description: "The Space's server could not read its content editor access record, so the editor could not open."
---

The Space's server could not read its content editor access record, so the editor could not open.

**How to resolve:** Try opening the editor again in a moment; the same link stays usable. If it keeps failing, contact support with the request ID.

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
  "type": "https://spacefast.com/docs/errors/content_admin_authorization_unavailable",
  "title": "Content admin authorization unavailable",
  "status": 503,
  "detail": "The Space's server could not read its content editor access record, so the editor could not open.",
  "code": "content_admin_authorization_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

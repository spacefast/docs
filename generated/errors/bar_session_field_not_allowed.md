---
title: "bar_session_field_not_allowed"
description: "The Space bar can only change search indexing on the Space itself."
---

The Space bar can only change search indexing on the Space itself.

**How to resolve:** Change the Space's name, address or settings in the dashboard.

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
  "type": "https://spacefast.com/docs/errors/bar_session_field_not_allowed",
  "title": "Bar session field not allowed",
  "status": 422,
  "detail": "The Space bar can only change search indexing on the Space itself.",
  "code": "bar_session_field_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

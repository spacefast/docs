---
title: "path_scoped_manager_refused"
description: "A manager manages the whole Space, so a manager role on some paths is refused."
---

A manager manages the whole Space, so a manager role on some paths is refused.

**How to resolve:** Give the whole Space (`/`) to a manager, or give a path-scoped `editor` role instead.

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
  "type": "https://spacefast.com/docs/errors/path_scoped_manager_refused",
  "title": "Path scoped manager refused",
  "status": 422,
  "detail": "A manager manages the whole Space, so a manager role on some paths is refused.",
  "code": "path_scoped_manager_refused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

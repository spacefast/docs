---
title: "invalid_file_path"
description: "A file path in the request is not a valid space path."
---

A file path in the request is not a valid space path.

**How to resolve:** Use forward-slash relative paths without traversal segments.

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
  "type": "https://spacefast.com/docs/errors/invalid_file_path",
  "title": "Invalid file path",
  "status": 400,
  "detail": "A file path in the request is not a valid space path.",
  "code": "invalid_file_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

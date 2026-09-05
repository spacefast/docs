---
title: "invalid_publish_path"
description: "The publish contains a file path that is not safe to serve."
---

The publish contains a file path that is not safe to serve.

**How to resolve:** Remove path traversal, absolute paths, and control characters from the file names. A raw single-file publish needs a `path` query parameter.

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
  "type": "https://spacefast.com/docs/errors/invalid_publish_path",
  "title": "Invalid publish path",
  "status": 400,
  "detail": "The publish contains a file path that is not safe to serve.",
  "code": "invalid_publish_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

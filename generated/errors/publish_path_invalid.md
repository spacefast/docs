---
title: "publish_path_invalid"
description: "A publish path is not a relative, normalized POSIX path."
---

A publish path is not a relative, normalized POSIX path.

**How to resolve:** Use forward-slash relative paths without traversal segments or control characters.

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
  "type": "https://spacefast.com/docs/errors/publish_path_invalid",
  "title": "Publish path invalid",
  "status": 400,
  "detail": "A publish path is not a relative, normalized POSIX path.",
  "code": "publish_path_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

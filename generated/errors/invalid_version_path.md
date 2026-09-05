---
title: "invalid_version_path"
description: "A file path in the version is not a valid version path."
---

A file path in the version is not a valid version path.

**How to resolve:** Rename the file so its path has no control characters and resolves to a non-empty relative path.

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
  "type": "https://spacefast.com/docs/errors/invalid_version_path",
  "title": "Invalid version path",
  "status": 400,
  "detail": "A file path in the version is not a valid version path.",
  "code": "invalid_version_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

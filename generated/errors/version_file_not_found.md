---
title: "version_file_not_found"
description: "The requested file does not exist in this version."
---

The requested file does not exist in this version.

**How to resolve:** List the version's files to confirm the path.

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
  "type": "https://spacefast.com/docs/errors/version_file_not_found",
  "title": "Version file not found",
  "status": 400,
  "detail": "The requested file does not exist in this version.",
  "code": "version_file_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

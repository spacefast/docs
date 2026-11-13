---
title: "upload_import_conflict"
description: "The import target already contains chunked content."
---

The import target already contains chunked content.

**How to resolve:** Create an empty upload file for the download.

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
  "type": "https://spacefast.com/docs/errors/upload_import_conflict",
  "title": "Upload import conflict",
  "status": 400,
  "detail": "The import target already contains chunked content.",
  "code": "upload_import_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

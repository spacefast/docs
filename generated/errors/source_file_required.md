---
title: "source_file_required"
description: "The source operation requires file paths instead of folder paths."
---

The source operation requires file paths instead of folder paths.

**How to resolve:** List the folder and select its individual files.

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
  "type": "https://spacefast.com/docs/errors/source_file_required",
  "title": "Source file required",
  "status": 400,
  "detail": "The source operation requires file paths instead of folder paths.",
  "code": "source_file_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

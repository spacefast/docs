---
title: "version_files_missing"
description: "Files the version declared were missing from runtime storage at finalize."
---

Files the version declared were missing from runtime storage at finalize.

**How to resolve:** Publish again so the missing paths are uploaded.

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
  "type": "https://spacefast.com/docs/errors/version_files_missing",
  "title": "Version files missing",
  "status": 400,
  "detail": "Files the version declared were missing from runtime storage at finalize.",
  "code": "version_files_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

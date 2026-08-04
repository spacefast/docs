---
title: "import_archive_not_uploaded"
description: "The import has no uploaded archive yet."
---

The import has no uploaded archive yet.

**How to resolve:** Upload the archive to the import's upload target, then finalize.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/import_archive_not_uploaded",
  "title": "Import archive not uploaded",
  "status": 400,
  "detail": "The import has no uploaded archive yet.",
  "code": "import_archive_not_uploaded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "space_import_archive_invalid"
description: "The import archive is not a valid Spacefast export."
---

The import archive is not a valid Spacefast export.

**How to resolve:** Export the source space again and upload the unmodified archive.

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
  "type": "https://spacefast.com/docs/errors/space_import_archive_invalid",
  "title": "Space import archive invalid",
  "status": 400,
  "detail": "The import archive is not a valid Spacefast export.",
  "code": "space_import_archive_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

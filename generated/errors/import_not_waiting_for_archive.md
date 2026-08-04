---
title: "import_not_waiting_for_archive"
description: "The import is not waiting for an archive upload."
---

The import is not waiting for an archive upload.

**How to resolve:** Check the import status. The archive step may already be complete.

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
  "type": "https://docs.spacefast.com/docs/errors/import_not_waiting_for_archive",
  "title": "Import not waiting for archive",
  "status": 400,
  "detail": "The import is not waiting for an archive upload.",
  "code": "import_not_waiting_for_archive",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

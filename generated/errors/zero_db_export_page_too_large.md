---
title: "zero_db_export_page_too_large"
description: "The export page is larger than 16 MiB."
---

The export page is larger than 16 MiB.

**How to resolve:** Retry the export with a smaller `limit`.

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
  "type": "https://spacefast.com/docs/errors/zero_db_export_page_too_large",
  "title": "Zero db export page too large",
  "status": 400,
  "detail": "The export page is larger than 16 MiB.",
  "code": "zero_db_export_page_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

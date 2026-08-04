---
title: "zero_db_export_failed"
description: "The runtime could not read a database export page."
---

The runtime could not read a database export page.

**How to resolve:** Retry the export. If it repeats, inspect the live database and runtime logs.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_db_export_failed",
  "title": "Zero db export failed",
  "status": 400,
  "detail": "The runtime could not read a database export page.",
  "code": "zero_db_export_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

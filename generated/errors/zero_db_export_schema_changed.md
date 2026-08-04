---
title: "zero_db_export_schema_changed"
description: "The database schema changed while an export was in progress."
---

The database schema changed while an export was in progress.

**How to resolve:** Start a fresh export so every page uses the same schema.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_db_export_schema_changed",
  "title": "Zero db export schema changed",
  "status": 400,
  "detail": "The database schema changed while an export was in progress.",
  "code": "zero_db_export_schema_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_db_export_cursor_invalid"
description: "The local database export cursor is invalid or belongs to another export."
---

The local database export cursor is invalid or belongs to another export.

**How to resolve:** Start a fresh export and use only cursors returned by that same table and schema.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_db_export_cursor_invalid",
  "title": "Zero db export cursor invalid",
  "status": 400,
  "detail": "The local database export cursor is invalid or belongs to another export.",
  "code": "zero_db_export_cursor_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

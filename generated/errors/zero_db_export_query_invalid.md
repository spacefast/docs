---
title: "zero_db_export_query_invalid"
description: "The local database export request has an invalid table or page size."
---

The local database export request has an invalid table or page size.

**How to resolve:** Use a declared table name and a page size within the documented limit.

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
  "type": "https://spacefast.com/docs/errors/zero_db_export_query_invalid",
  "title": "Zero db export query invalid",
  "status": 400,
  "detail": "The local database export request has an invalid table or page size.",
  "code": "zero_db_export_query_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

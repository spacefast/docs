---
title: "space_db_column_not_found"
description: "The request names a column the table does not have."
---

The request names a column the table does not have.

**How to resolve:** Check the column names with `listSpaceDatabaseTables` and retry.

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
  "type": "https://spacefast.com/docs/errors/space_db_column_not_found",
  "title": "Space db column not found",
  "status": 422,
  "detail": "The request names a column the table does not have.",
  "code": "space_db_column_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

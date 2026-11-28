---
title: "space_db_column_not_editable"
description: "The request writes a column that is binary, generated, or otherwise read-only here."
---

The request writes a column that is binary, generated, or otherwise read-only here.

**How to resolve:** Leave that column out. `listSpaceDatabaseTables` marks each column's `editable`; change binary values through `sf db console`.

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
  "type": "https://spacefast.com/docs/errors/space_db_column_not_editable",
  "title": "Space db column not editable",
  "status": 422,
  "detail": "The request writes a column that is binary, generated, or otherwise read-only here.",
  "code": "space_db_column_not_editable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

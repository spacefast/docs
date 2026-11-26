---
title: "space_db_table_not_editable"
description: "This table's rows can be read but not changed here: it has no primary key, a binary or secret one, triggers, or a storage engine that can't roll back a change."
---

This table's rows can be read but not changed here: it has no primary key, a binary or secret one, triggers, or a storage engine that can't roll back a change.

**How to resolve:** Read `readOnlyReason` from `listSpaceDatabaseTables`. Change these rows through `sf db console`, or give the table a primary key on InnoDB.

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
  "type": "https://spacefast.com/docs/errors/space_db_table_not_editable",
  "title": "Space db table not editable",
  "status": 422,
  "detail": "This table's rows can be read but not changed here: it has no primary key, a binary or secret one, triggers, or a storage engine that can't roll back a change.",
  "code": "space_db_table_not_editable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

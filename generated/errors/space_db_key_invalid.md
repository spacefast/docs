---
title: "space_db_key_invalid"
description: "A row key does not name exactly the table's primary-key columns, or a new row leaves out a primary-key column that doesn't auto-increment."
---

A row key does not name exactly the table's primary-key columns, or a new row leaves out a primary-key column that doesn't auto-increment.

**How to resolve:** Pass every primary-key column, and only those, as listed in the table's `primaryKey`. Only an auto-increment column may be left out of a new row.

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
  "type": "https://spacefast.com/docs/errors/space_db_key_invalid",
  "title": "Space db key invalid",
  "status": 422,
  "detail": "A row key does not name exactly the table's primary-key columns, or a new row leaves out a primary-key column that doesn't auto-increment.",
  "code": "space_db_key_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "space_db_table_protected"
description: "This table is Spacefast's own bookkeeping or sign-in data, so it can't be read or changed here."
---

This table is Spacefast's own bookkeeping or sign-in data, so it can't be read or changed here.

**How to resolve:** Work with the Space's WordPress or app tables instead. Spacefast tables change only through Spacefast's own features.

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
  "type": "https://spacefast.com/docs/errors/space_db_table_protected",
  "title": "Space db table protected",
  "status": 422,
  "detail": "This table is Spacefast's own bookkeeping or sign-in data, so it can't be read or changed here.",
  "code": "space_db_table_protected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

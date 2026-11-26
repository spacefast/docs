---
title: "space_db_cursor_invalid"
description: "The cursor does not belong to this table or query."
---

The cursor does not belong to this table or query.

**How to resolve:** Start again without a cursor, then pass each page's `pagination.nextCursor` unchanged.

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
  "type": "https://spacefast.com/docs/errors/space_db_cursor_invalid",
  "title": "Space db cursor invalid",
  "status": 422,
  "detail": "The cursor does not belong to this table or query.",
  "code": "space_db_cursor_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

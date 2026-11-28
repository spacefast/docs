---
title: "space_db_duplicate_key"
description: "A row with the same primary or unique key already exists; nothing in this request was written."
---

A row with the same primary or unique key already exists; nothing in this request was written.

**How to resolve:** Read the existing row and update it instead, or choose a different key.

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
  "type": "https://spacefast.com/docs/errors/space_db_duplicate_key",
  "title": "Space db duplicate key",
  "status": 422,
  "detail": "A row with the same primary or unique key already exists; nothing in this request was written.",
  "code": "space_db_duplicate_key",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

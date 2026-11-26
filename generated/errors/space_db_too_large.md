---
title: "space_db_too_large"
description: "A row in the request, or the page of rows asked for, is larger than one database statement can carry."
---

A row in the request, or the page of rows asked for, is larger than one database statement can carry.

**How to resolve:** Ask for fewer rows with a smaller `limit`, or send large rows one at a time. For very large values, use `sf db console`.

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
  "type": "https://spacefast.com/docs/errors/space_db_too_large",
  "title": "Space db too large",
  "status": 422,
  "detail": "A row in the request, or the page of rows asked for, is larger than one database statement can carry.",
  "code": "space_db_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

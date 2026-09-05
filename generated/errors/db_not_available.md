---
title: "db_not_available"
description: "The Space's live version has no database."
---

The Space's live version has no database.

**How to resolve:** Publish a version that declares a database, or call `GET /v1/spaces/{id}/runtime` to see what the live version runs.

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
  "type": "https://spacefast.com/docs/errors/db_not_available",
  "title": "Db not available",
  "status": 400,
  "detail": "The Space's live version has no database.",
  "code": "db_not_available",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

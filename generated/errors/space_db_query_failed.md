---
title: "space_db_query_failed"
description: "The database could not complete the request. A change in it was rolled back before anything was written."
---

The database could not complete the request. A change in it was rolled back before anything was written.

**How to resolve:** Retry once. If it fails again, contact support with the request ID.

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
  "type": "https://spacefast.com/docs/errors/space_db_query_failed",
  "title": "Space db query failed",
  "status": 422,
  "detail": "The database could not complete the request. A change in it was rolled back before anything was written.",
  "code": "space_db_query_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

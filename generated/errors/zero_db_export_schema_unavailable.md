---
title: "zero_db_export_schema_unavailable"
description: "This app's runtime can't describe its database schema, so a complete export isn't possible."
---

This app's runtime can't describe its database schema, so a complete export isn't possible.

**How to resolve:** Publish the app again, then start the export again. See https://spacefast.com/docs/zero.

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
  "type": "https://spacefast.com/docs/errors/zero_db_export_schema_unavailable",
  "title": "Zero db export schema unavailable",
  "status": 422,
  "detail": "This app's runtime can't describe its database schema, so a complete export isn't possible.",
  "code": "zero_db_export_schema_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_migration_available"
description: "An earlier server added this notice to Zero 0.8 versions. Current servers no longer send it."
---

An earlier server added this notice to Zero 0.8 versions. Current servers no longer send it.

**How to resolve:** Nothing to do: the Zero 0.8 app keeps publishing and serving.

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
  "type": "https://spacefast.com/docs/errors/zero_migration_available",
  "title": "Zero migration available",
  "status": 422,
  "detail": "An earlier server added this notice to Zero 0.8 versions. Current servers no longer send it.",
  "code": "zero_migration_available",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

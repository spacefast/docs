---
title: "zero_db_url_missing"
description: "No Zero database URL is configured."
---

No Zero database URL is configured.

**How to resolve:** Configure `DATABASE_URL` or finalize the version with database connection variables.

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
  "type": "https://spacefast.com/docs/errors/zero_db_url_missing",
  "title": "Zero db url missing",
  "status": 400,
  "detail": "No Zero database URL is configured.",
  "code": "zero_db_url_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

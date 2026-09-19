---
title: "zero_db_execute_failed"
description: "A Zero database write failed."
---

A Zero database write failed.

**How to resolve:** Inspect the mutation, schema, and database logs. Fix the SQL issue, then retry.

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
  "type": "https://spacefast.com/docs/errors/zero_db_execute_failed",
  "title": "Zero db execute failed",
  "status": 400,
  "detail": "A Zero database write failed.",
  "code": "zero_db_execute_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

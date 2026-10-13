---
title: "zero_db_operation_too_large"
description: "A database operation is larger than 64 KB (65,536 bytes). A batch counts as one operation."
---

A database operation is larger than 64 KB (65,536 bytes). A batch counts as one operation.

**How to resolve:** Send fewer or smaller statements per call, then retry.

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
  "type": "https://spacefast.com/docs/errors/zero_db_operation_too_large",
  "title": "Zero db operation too large",
  "status": 400,
  "detail": "A database operation is larger than 64 KB (65,536 bytes). A batch counts as one operation.",
  "code": "zero_db_operation_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

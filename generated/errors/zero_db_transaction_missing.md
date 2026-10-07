---
title: "zero_db_transaction_missing"
description: "The Zero runner tried to finish a database transaction that was not active."
---

The Zero runner tried to finish a database transaction that was not active.

**How to resolve:** Rebuild with the current Zero runner. If the failure repeats, report it.

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
  "type": "https://spacefast.com/docs/errors/zero_db_transaction_missing",
  "title": "Zero db transaction missing",
  "status": 400,
  "detail": "The Zero runner tried to finish a database transaction that was not active.",
  "code": "zero_db_transaction_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

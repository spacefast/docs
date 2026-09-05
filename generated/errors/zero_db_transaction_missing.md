---
title: "zero_db_transaction_missing"
description: "No Zero database transaction is open on this connection."
---

No Zero database transaction is open on this connection.

**How to resolve:** Start a transaction before committing or rolling one back.

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
  "detail": "No Zero database transaction is open on this connection.",
  "code": "zero_db_transaction_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

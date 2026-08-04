---
title: "zero_db_transaction_active"
description: "The Zero runner tried to start a database transaction while one was already active."
---

The Zero runner tried to start a database transaction while one was already active.

**How to resolve:** Rebuild with the current Zero runner and report the failure if it repeats.

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
  "type": "https://spacefast.com/docs/errors/zero_db_transaction_active",
  "title": "Zero db transaction active",
  "status": 400,
  "detail": "The Zero runner tried to start a database transaction while one was already active.",
  "code": "zero_db_transaction_active",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

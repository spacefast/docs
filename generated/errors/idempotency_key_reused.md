---
title: "idempotency_key_reused"
description: "The Idempotency-Key was reused with a different request body."
---

The Idempotency-Key was reused with a different request body.

**How to resolve:** Use a fresh key for new requests. Keys bind to one exact request body.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/idempotency_key_reused",
  "title": "Idempotency key reused",
  "status": 400,
  "detail": "The Idempotency-Key was reused with a different request body.",
  "code": "idempotency_key_reused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "idempotency_key_reused"
description: "This idempotency key was already used with a different request body."
---

This idempotency key was already used with a different request body.

**How to resolve:** Send a new `Idempotency-Key`, or replay the exact body the key was first used with.

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
  "type": "https://spacefast.com/docs/errors/idempotency_key_reused",
  "title": "Idempotency key reused",
  "status": 400,
  "detail": "This idempotency key was already used with a different request body.",
  "code": "idempotency_key_reused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

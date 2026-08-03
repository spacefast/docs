---
title: "idempotency_key_reused"
description: "The Idempotency-Key was reused with a different request body."
---

The Idempotency-Key was reused with a different request body.

**How to resolve:** Use a fresh key for new requests. Keys bind to one exact request body.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "idempotency_key_reused",
    "message": "The Idempotency-Key was reused with a different request body.",
    "docsUrl": "https://docs.spacefast.com/errors/idempotency_key_reused",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

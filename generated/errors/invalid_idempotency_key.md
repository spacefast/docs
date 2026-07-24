---
title: "invalid_idempotency_key"
description: "The Idempotency-Key header is missing, empty, or too long."
---

The Idempotency-Key header is missing, empty, or too long.

**How to resolve:** Send a non-empty Idempotency-Key header of at most 512 characters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_idempotency_key",
    "message": "The Idempotency-Key header is missing, empty, or too long.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_idempotency_key",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

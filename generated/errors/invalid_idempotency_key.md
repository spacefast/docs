---
title: "invalid_idempotency_key"
description: "The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal."
---

The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal.

**How to resolve:** Send a non-empty Idempotency-Key of at most 255 characters. Credential-free publish retries also need a stable, secret X-Spacefast-Idempotency-Principal containing 64 hexadecimal characters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_idempotency_key",
    "message": "The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_idempotency_key",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

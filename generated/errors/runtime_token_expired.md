---
title: "runtime_token_expired"
description: "The runtime token has expired."
---

The runtime token has expired.

**How to resolve:** Mint a fresh runtime token; step tokens are short-lived by design.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_token_expired",
    "message": "The runtime token has expired.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_token_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

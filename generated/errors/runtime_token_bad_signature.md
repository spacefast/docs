---
title: "runtime_token_bad_signature"
description: "The runtime token signature did not verify."
---

The runtime token signature did not verify.

**How to resolve:** Mint a fresh token. Verify clocks and JWKS freshness if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_token_bad_signature",
    "message": "The runtime token signature did not verify.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_token_bad_signature",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

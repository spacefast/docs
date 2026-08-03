---
title: "runtime_jwks_key_missing"
description: "No signing key matching the token's key id was found."
---

No signing key matching the token's key id was found.

**How to resolve:** Refresh the runtime JWKS. The signing keys may have rotated.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_jwks_key_missing",
    "message": "No signing key matching the token's key id was found.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_jwks_key_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

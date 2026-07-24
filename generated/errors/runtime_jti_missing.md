---
title: "runtime_jti_missing"
description: "The runtime token is missing its replay-protection id."
---

The runtime token is missing its replay-protection id.

**How to resolve:** Mint a fresh runtime token; tokens must carry a jti claim.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_jti_missing",
    "message": "The runtime token is missing its replay-protection id.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_jti_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

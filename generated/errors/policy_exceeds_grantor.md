---
title: "policy_exceeds_grantor"
description: "The requested key policy grants more than your own credential allows."
---

The requested key policy grants more than your own credential allows.

**How to resolve:** Request a policy that is a subset of the credential creating the key.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "policy_exceeds_grantor",
    "message": "The requested key policy grants more than your own credential allows.",
    "docsUrl": "https://docs.spacefast.com/errors/policy_exceeds_grantor",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

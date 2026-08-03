---
title: "verification_required"
description: "Domain verification is required before this operation."
---

Domain verification is required before this operation.

**How to resolve:** Add the verification DNS record, then run verify on the domain.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "verification_required",
    "message": "Domain verification is required before this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/verification_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

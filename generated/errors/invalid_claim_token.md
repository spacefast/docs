---
title: "invalid_claim_token"
description: "The claim token is invalid or does not match this space."
---

The claim token is invalid or does not match this space.

**How to resolve:** Use the exact claim URL returned by the publish that created the space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_claim_token",
    "message": "The claim token is invalid or does not match this space.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_claim_token",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

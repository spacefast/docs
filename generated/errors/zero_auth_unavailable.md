---
title: "zero_auth_unavailable"
description: "Hosted Zero auth is not configured for this deployment."
---

Hosted Zero auth is not configured for this deployment.

**How to resolve:** Finalize the Zero version with hosted auth URLs or use guest/local auth.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_auth_unavailable",
    "message": "Hosted Zero auth is not configured for this deployment.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_auth_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

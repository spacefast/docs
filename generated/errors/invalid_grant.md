---
title: "invalid_grant"
description: "The authorization grant is invalid or was already used."
---

The authorization grant is invalid or was already used.

**How to resolve:** Restart the login flow to obtain a new grant.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_grant",
    "message": "The authorization grant is invalid or was already used.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_grant",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "credential_expired"
description: "The credential used for this request has expired."
---

The credential used for this request has expired.

**How to resolve:** Create a new API key or sign in again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "credential_expired",
    "message": "The credential used for this request has expired.",
    "docsUrl": "https://spacefast.com/docs/errors/credential_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

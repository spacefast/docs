---
title: "expired_token"
description: "The token has expired."
---

The token has expired.

**How to resolve:** Request a new token and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "expired_token",
    "message": "The token has expired.",
    "docsUrl": "https://docs.spacefast.com/errors/expired_token",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

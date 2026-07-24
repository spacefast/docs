---
title: "invalid_continuation_token"
description: "The continuation token is invalid, expired, or already finished."
---

The continuation token is invalid, expired, or already finished.

**How to resolve:** Restart the originating flow to obtain a fresh requiresAction envelope and continuation token.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_continuation_token",
    "message": "The continuation token is invalid, expired, or already finished.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_continuation_token",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "continuation_used"
description: "This claim token was already exchanged for a durable access token."
---

This claim token was already exchanged for a durable access token.

**How to resolve:** Authenticate with the exchanged access token (check .spacefast/state.json or wherever it was saved). If it was lost, ask the space owner to create a new API key.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "continuation_used",
    "message": "This claim token was already exchanged for a durable access token.",
    "docsUrl": "https://docs.spacefast.com/errors/continuation_used",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "runtime_token_invalid"
description: "The runtime token could not be parsed or validated."
---

The runtime token could not be parsed or validated.

**How to resolve:** Mint a fresh runtime token.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_token_invalid",
    "message": "The runtime token could not be parsed or validated.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_token_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

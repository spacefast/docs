---
title: "runtime_jti_replayed"
description: "The runtime token was already used; replays are rejected."
---

The runtime token was already used; replays are rejected.

**How to resolve:** Mint a fresh runtime token for each request.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_jti_replayed",
    "message": "The runtime token was already used; replays are rejected.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_jti_replayed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

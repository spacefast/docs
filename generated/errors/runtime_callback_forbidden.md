---
title: "runtime_callback_forbidden"
description: "The runtime callback could not be authenticated."
---

The runtime callback could not be authenticated.

**How to resolve:** Verify the callback secret configuration for this runtime.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_callback_forbidden",
    "message": "The runtime callback could not be authenticated.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_callback_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

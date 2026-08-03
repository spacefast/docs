---
title: "provider_error"
description: "The hosting provider reported an error."
---

The hosting provider reported an error.

**How to resolve:** Retry. If the error persists, contact support with the requestId.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "provider_error",
    "message": "The hosting provider reported an error.",
    "docsUrl": "https://docs.spacefast.com/errors/provider_error",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

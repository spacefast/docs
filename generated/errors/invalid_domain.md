---
title: "invalid_domain"
description: "The domain reference is invalid."
---

The domain reference is invalid.

**How to resolve:** Pass a valid domain id or name.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_domain",
    "message": "The domain reference is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_domain",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

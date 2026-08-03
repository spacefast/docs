---
title: "domain_already_exists"
description: "This domain is already present in your inventory."
---

This domain is already present in your inventory.

**How to resolve:** Use the existing domain record instead of adding it again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_already_exists",
    "message": "This domain is already present in your inventory.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_already_exists",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

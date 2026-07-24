---
title: "domain_not_bound"
description: "The domain is not bound to this space."
---

The domain is not bound to this space.

**How to resolve:** Bind the domain to the space first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_not_bound",
    "message": "The domain is not bound to this space.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_not_bound",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

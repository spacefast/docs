---
title: "domain_bound"
description: "The domain is currently bound to a space, which blocks this operation."
---

The domain is currently bound to a space, which blocks this operation.

**How to resolve:** Remove the domain's bindings first, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_bound",
    "message": "The domain is currently bound to a space, which blocks this operation.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_bound",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

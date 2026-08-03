---
title: "slug_reserved"
description: "The slug is reserved for infrastructure, product, or impersonation protection."
---

The slug is reserved for infrastructure, product, or impersonation protection.

**How to resolve:** Choose a different name that is not reserved by the shared slug policy.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "slug_reserved",
    "message": "The slug is reserved for infrastructure, product, or impersonation protection.",
    "docsUrl": "https://docs.spacefast.com/errors/slug_reserved",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

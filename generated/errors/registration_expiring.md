---
title: "registration_expiring"
description: "The domain registration is about to expire, which blocks this operation."
---

The domain registration is about to expire, which blocks this operation.

**How to resolve:** Renew the domain first, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "registration_expiring",
    "message": "The domain registration is about to expire, which blocks this operation.",
    "docsUrl": "https://spacefast.com/docs/errors/registration_expiring",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

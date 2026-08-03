---
title: "domain_registration_active"
description: "The domain has an active registration, which blocks this operation."
---

The domain has an active registration, which blocks this operation.

**How to resolve:** Wait for or cancel the registration before retrying.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_registration_active",
    "message": "The domain has an active registration, which blocks this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_registration_active",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

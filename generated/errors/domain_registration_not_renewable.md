---
title: "domain_registration_not_renewable"
description: "The domain registration cannot be renewed right now."
---

The domain registration cannot be renewed right now.

**How to resolve:** Check the registration status and renewal window for the domain.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_registration_not_renewable",
    "message": "The domain registration cannot be renewed right now.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_registration_not_renewable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

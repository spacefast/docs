---
title: "registration_expired"
description: "The domain registration has expired."
---

The domain registration has expired.

**How to resolve:** Renew the domain at its registrar before retrying.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "registration_expired",
    "message": "The domain registration has expired.",
    "docsUrl": "https://spacefast.com/docs/errors/registration_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

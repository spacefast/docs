---
title: "space_hostname_identity_missing"
description: "The space is missing its persisted default hostname identity."
---

The space is missing its persisted default hostname identity.

**How to resolve:** Contact support. Retrying cannot safely recreate a permanent hostname identity.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_hostname_identity_missing",
    "message": "The space is missing its persisted default hostname identity.",
    "docsUrl": "https://docs.spacefast.com/errors/space_hostname_identity_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

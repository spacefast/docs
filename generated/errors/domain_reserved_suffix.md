---
title: "domain_reserved_suffix"
description: "The hostname is under a Spacefast-managed suffix and cannot be added as a domain."
---

The hostname is under a Spacefast-managed suffix and cannot be added as a domain.

**How to resolve:** Use a domain you own. Spacefast assigns default and management hostnames automatically.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_reserved_suffix",
    "message": "The hostname is under a Spacefast-managed suffix and cannot be added as a domain.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_reserved_suffix",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

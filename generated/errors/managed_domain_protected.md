---
title: "managed_domain_protected"
description: "This is a system-managed view.fast hostname and cannot be mutated like a custom domain."
---

This is a system-managed view.fast hostname and cannot be mutated like a custom domain.

**How to resolve:** Use it as a read-only managed hostname, or add a custom domain if you need editable DNS and binding controls.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "managed_domain_protected",
    "message": "This is a system-managed view.fast hostname and cannot be mutated like a custom domain.",
    "docsUrl": "https://spacefast.com/docs/errors/managed_domain_protected",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

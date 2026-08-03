---
title: "api_key_scope_underivable"
description: "A concrete access policy could not be derived from the requested scope and permissions."
---

A concrete access policy could not be derived from the requested scope and permissions.

**How to resolve:** Point scope at a resource you can already reach (an existing space owned by a team) and request permissions your credential already has.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "api_key_scope_underivable",
    "message": "A concrete access policy could not be derived from the requested scope and permissions.",
    "docsUrl": "https://docs.spacefast.com/errors/api_key_scope_underivable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

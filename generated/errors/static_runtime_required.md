---
title: "static_runtime_required"
description: "This operation only applies to static-runtime spaces."
---

This operation only applies to static-runtime spaces.

**How to resolve:** Target a static-runtime space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_runtime_required",
    "message": "This operation only applies to static-runtime spaces.",
    "docsUrl": "https://docs.spacefast.com/errors/static_runtime_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

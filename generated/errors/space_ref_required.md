---
title: "space_ref_required"
description: "A space reference is required for this operation."
---

A space reference is required for this operation.

**How to resolve:** Pass a spc_ id, slug, or hostname.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_ref_required",
    "message": "A space reference is required for this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/space_ref_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

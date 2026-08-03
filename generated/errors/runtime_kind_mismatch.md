---
title: "runtime_kind_mismatch"
description: "This operation is only available for a different runtime kind."
---

This operation is only available for a different runtime kind.

**How to resolve:** Check `sf runtime status` for what the live version actually runs, then use the surface that runtime supports.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_kind_mismatch",
    "message": "This operation is only available for a different runtime kind.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_kind_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

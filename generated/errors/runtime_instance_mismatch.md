---
title: "runtime_instance_mismatch"
description: "The request reached a different runtime instance than the one it was issued for."
---

The request reached a different runtime instance than the one it was issued for.

**How to resolve:** Re-request instructions; the space may have moved to another instance.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_instance_mismatch",
    "message": "The request reached a different runtime instance than the one it was issued for.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_instance_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "runtime_action_forbidden"
description: "The runtime credential does not allow this action."
---

The runtime credential does not allow this action.

**How to resolve:** Use a runtime token scoped for this action.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_action_forbidden",
    "message": "The runtime credential does not allow this action.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_action_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

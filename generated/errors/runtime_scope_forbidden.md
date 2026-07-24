---
title: "runtime_scope_forbidden"
description: "The runtime token's scope does not cover this path or action."
---

The runtime token's scope does not cover this path or action.

**How to resolve:** Use the token minted for this exact session, space, and step.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_scope_forbidden",
    "message": "The runtime token's scope does not cover this path or action.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_scope_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_bytecode_invalid"
description: "The Zero endpoint bytecode could not be loaded by QuickJS."
---

The Zero endpoint bytecode could not be loaded by QuickJS.

**How to resolve:** Rebuild the project with the current Zero runner and redeploy.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_bytecode_invalid",
    "message": "The Zero endpoint bytecode could not be loaded by QuickJS.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_bytecode_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

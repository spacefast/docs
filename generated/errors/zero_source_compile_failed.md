---
title: "zero_source_compile_failed"
description: "The Zero endpoint source fallback failed to compile."
---

The Zero endpoint source fallback failed to compile.

**How to resolve:** Fix the endpoint source and rebuild bytecode.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_source_compile_failed",
    "message": "The Zero endpoint source fallback failed to compile.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_source_compile_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_endpoint_compile_failed"
description: "The runtime could not compile the Zero endpoint bytecode."
---

The runtime could not compile the Zero endpoint bytecode.

**How to resolve:** Inspect the compile diagnostics, fix the endpoint source, and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_compile_failed",
    "message": "The runtime could not compile the Zero endpoint bytecode.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoint_compile_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

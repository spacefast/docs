---
title: "zero_js_execution_failed"
description: "The Zero endpoint JavaScript threw during execution."
---

The Zero endpoint JavaScript threw during execution.

**How to resolve:** Inspect the endpoint error and fix the handler code.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_js_execution_failed",
    "message": "The Zero endpoint JavaScript threw during execution.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_js_execution_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

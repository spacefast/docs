---
title: "zero_js_execution_timeout"
description: "The Zero endpoint exceeded its JavaScript execution budget."
---

The Zero endpoint exceeded its JavaScript execution budget.

**How to resolve:** Reduce synchronous work or database round trips in the handler.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_js_execution_timeout",
    "message": "The Zero endpoint exceeded its JavaScript execution budget.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_js_execution_timeout",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_js_context_init_failed"
description: "The Zero runner could not initialize a QuickJS context."
---

The Zero runner could not initialize a QuickJS context.

**How to resolve:** Retry or rebuild the runner; report persistent runtime initialization failures.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_js_context_init_failed",
    "message": "The Zero runner could not initialize a QuickJS context.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_js_context_init_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

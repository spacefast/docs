---
title: "zero_js_globals_failed"
description: "The Zero runner could not install runtime globals for the endpoint."
---

The Zero runner could not install runtime globals for the endpoint.

**How to resolve:** Rebuild with a current runner and report the failure if it repeats.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_js_globals_failed",
    "message": "The Zero runner could not install runtime globals for the endpoint.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_js_globals_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

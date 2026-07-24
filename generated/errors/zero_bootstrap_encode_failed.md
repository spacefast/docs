---
title: "zero_bootstrap_encode_failed"
description: "The Zero runner could not encode the JavaScript bootstrap data."
---

The Zero runner could not encode the JavaScript bootstrap data.

**How to resolve:** Retry with valid request metadata; report the issue if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_bootstrap_encode_failed",
    "message": "The Zero runner could not encode the JavaScript bootstrap data.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_bootstrap_encode_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

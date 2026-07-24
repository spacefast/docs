---
title: "version_failed"
description: "The version failed and cannot be used."
---

The version failed and cannot be used.

**How to resolve:** Check the version diagnostics, fix the cause, and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_failed",
    "message": "The version failed and cannot be used.",
    "docsUrl": "https://spacefast.com/docs/errors/version_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

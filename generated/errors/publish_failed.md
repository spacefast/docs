---
title: "publish_failed"
description: "The publish failed before going live."
---

The publish failed before going live.

**How to resolve:** Check the version diagnostics for the cause, then publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_failed",
    "message": "The publish failed before going live.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

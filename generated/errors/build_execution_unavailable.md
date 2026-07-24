---
title: "build_execution_unavailable"
description: "Build execution is not available on this deployment."
---

Build execution is not available on this deployment.

**How to resolve:** Publish prebuilt static output instead, or wait for builds to become available.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_execution_unavailable",
    "message": "Build execution is not available on this deployment.",
    "docsUrl": "https://spacefast.com/docs/errors/build_execution_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

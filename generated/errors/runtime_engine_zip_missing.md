---
title: "runtime_engine_zip_missing"
description: "The runtime engine artifact is missing from this deployment."
---

The runtime engine artifact is missing from this deployment.

**How to resolve:** Rebuild the control plane so dist/runtime-engine.zip exists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_engine_zip_missing",
    "message": "The runtime engine artifact is missing from this deployment.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_engine_zip_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

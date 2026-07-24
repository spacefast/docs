---
title: "static_runtime_control_path_not_supported"
description: "This control path is not supported by the static runtime."
---

This control path is not supported by the static runtime.

**How to resolve:** Remove the path from the upload.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_runtime_control_path_not_supported",
    "message": "This control path is not supported by the static runtime.",
    "docsUrl": "https://spacefast.com/docs/errors/static_runtime_control_path_not_supported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "static_control_file_not_supported"
description: "This control file is not supported by the static runtime."
---

This control file is not supported by the static runtime.

**How to resolve:** Remove the file. See the routing docs for supported convention files.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_control_file_not_supported",
    "message": "This control file is not supported by the static runtime.",
    "docsUrl": "https://docs.spacefast.com/errors/static_control_file_not_supported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

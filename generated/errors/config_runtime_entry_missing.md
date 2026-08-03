---
title: "config_runtime_entry_missing"
description: "The declared runtime has no entry module to compile."
---

The declared runtime has no entry module to compile.

**How to resolve:** Name the entry in sf.jsonc: runtime.entry for functions, runtime.server and runtime.client for zero. Remove the runtime block to publish static files instead.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_runtime_entry_missing",
    "message": "The declared runtime has no entry module to compile.",
    "docsUrl": "https://docs.spacefast.com/errors/config_runtime_entry_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "config_runtime_invalid_kind"
description: "The runtime block in the space configuration declares an unknown kind."
---

The runtime block in the space configuration declares an unknown kind.

**How to resolve:** Set runtime.kind to "zero" or "functions" in sf.jsonc.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_runtime_invalid_kind",
    "message": "The runtime block in the space configuration declares an unknown kind.",
    "docsUrl": "https://docs.spacefast.com/errors/config_runtime_invalid_kind",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

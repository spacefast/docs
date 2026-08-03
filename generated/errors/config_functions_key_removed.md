---
title: "config_functions_key_removed"
description: "The sf.jsonc configuration still uses the removed top-level functions key."
---

The sf.jsonc configuration still uses the removed top-level functions key.

**How to resolve:** Replace the functions block with a runtime block: set runtime.kind to "functions" and move entry, compatibilityDate, and database under it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_functions_key_removed",
    "message": "The sf.jsonc configuration still uses the removed top-level functions key.",
    "docsUrl": "https://docs.spacefast.com/errors/config_functions_key_removed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

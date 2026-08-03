---
title: "space_import_runtime_schema_unsupported"
description: "The export was produced by an unsupported runtime schema version."
---

The export was produced by an unsupported runtime schema version.

**How to resolve:** Re-export from a current runtime, or upgrade before exporting.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_import_runtime_schema_unsupported",
    "message": "The export was produced by an unsupported runtime schema version.",
    "docsUrl": "https://docs.spacefast.com/errors/space_import_runtime_schema_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "space_import_archive_too_large"
description: "The import archive exceeds the maximum allowed size."
---

The import archive exceeds the maximum allowed size.

**How to resolve:** Reduce the export size, or import versions individually.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_import_archive_too_large",
    "message": "The import archive exceeds the maximum allowed size.",
    "docsUrl": "https://docs.spacefast.com/errors/space_import_archive_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

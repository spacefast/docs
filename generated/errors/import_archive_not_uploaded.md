---
title: "import_archive_not_uploaded"
description: "The import has no uploaded archive yet."
---

The import has no uploaded archive yet.

**How to resolve:** Upload the archive to the import's upload target, then finalize.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "import_archive_not_uploaded",
    "message": "The import has no uploaded archive yet.",
    "docsUrl": "https://spacefast.com/docs/errors/import_archive_not_uploaded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

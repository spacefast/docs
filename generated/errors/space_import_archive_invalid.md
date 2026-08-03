---
title: "space_import_archive_invalid"
description: "The import archive is not a valid Spacefast export."
---

The import archive is not a valid Spacefast export.

**How to resolve:** Export the source space again and upload the unmodified archive.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_import_archive_invalid",
    "message": "The import archive is not a valid Spacefast export.",
    "docsUrl": "https://docs.spacefast.com/errors/space_import_archive_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

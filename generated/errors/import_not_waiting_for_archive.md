---
title: "import_not_waiting_for_archive"
description: "The import is not waiting for an archive upload."
---

The import is not waiting for an archive upload.

**How to resolve:** Check the import status. The archive step may already be complete.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "import_not_waiting_for_archive",
    "message": "The import is not waiting for an archive upload.",
    "docsUrl": "https://docs.spacefast.com/errors/import_not_waiting_for_archive",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

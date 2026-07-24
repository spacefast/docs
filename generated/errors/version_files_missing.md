---
title: "version_files_missing"
description: "Declared files were never uploaded, so the version cannot finalize."
---

Declared files were never uploaded, so the version cannot finalize.

**How to resolve:** Resume the upload session to see and upload the missing files.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_files_missing",
    "message": "Declared files were never uploaded, so the version cannot finalize.",
    "docsUrl": "https://spacefast.com/docs/errors/version_files_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

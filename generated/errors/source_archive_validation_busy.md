---
title: "source_archive_validation_busy"
description: "The service is already validating its maximum number of source archives."
---

The service is already validating its maximum number of source archives.

**How to resolve:** Wait briefly and retry the upload.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "source_archive_validation_busy",
    "message": "The service is already validating its maximum number of source archives.",
    "docsUrl": "https://spacefast.com/docs/errors/source_archive_validation_busy",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

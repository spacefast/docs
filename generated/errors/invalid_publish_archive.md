---
title: "invalid_publish_archive"
description: "The uploaded archive could not be read as a valid zip."
---

The uploaded archive could not be read as a valid zip.

**How to resolve:** Re-create the archive as a standard zip and upload again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_publish_archive",
    "message": "The uploaded archive could not be read as a valid zip.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_publish_archive",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

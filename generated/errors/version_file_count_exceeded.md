---
title: "version_file_count_exceeded"
description: "The version exceeds the maximum number of files."
---

The version exceeds the maximum number of files.

**How to resolve:** Reduce the file count or split content across multiple spaces.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_file_count_exceeded",
    "message": "The version exceeds the maximum number of files.",
    "docsUrl": "https://spacefast.com/docs/errors/version_file_count_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

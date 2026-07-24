---
title: "manifest_too_many_files"
description: "The upload manifest declares more files than the allowed ceiling."
---

The upload manifest declares more files than the allowed ceiling.

**How to resolve:** Reduce the file count or split content across multiple spaces.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "manifest_too_many_files",
    "message": "The upload manifest declares more files than the allowed ceiling.",
    "docsUrl": "https://spacefast.com/docs/errors/manifest_too_many_files",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

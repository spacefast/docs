---
title: "archive_too_large"
description: "The uploaded archive exceeds the maximum allowed size."
---

The uploaded archive exceeds the maximum allowed size.

**How to resolve:** Reduce the archive size or upload files individually through a version upload session.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "archive_too_large",
    "message": "The uploaded archive exceeds the maximum allowed size.",
    "docsUrl": "https://spacefast.com/docs/errors/archive_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

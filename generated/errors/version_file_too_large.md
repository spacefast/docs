---
title: "version_file_too_large"
description: "A file exceeds the plan's maximum file size."
---

A file exceeds the plan's maximum file size.

**How to resolve:** Reduce the file size.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_file_too_large",
    "message": "A file exceeds the plan's maximum file size.",
    "docsUrl": "https://docs.spacefast.com/errors/version_file_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

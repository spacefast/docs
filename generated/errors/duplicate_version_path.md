---
title: "duplicate_version_path"
description: "The version upload declares the same file path twice."
---

The version upload declares the same file path twice.

**How to resolve:** Deduplicate the file list so every path appears once.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "duplicate_version_path",
    "message": "The version upload declares the same file path twice.",
    "docsUrl": "https://spacefast.com/docs/errors/duplicate_version_path",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "version_no_publishable_files"
description: "The version contains no publishable files."
---

The version contains no publishable files.

**How to resolve:** Add at least one servable file before finalizing.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_no_publishable_files",
    "message": "The version contains no publishable files.",
    "docsUrl": "https://spacefast.com/docs/errors/version_no_publishable_files",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

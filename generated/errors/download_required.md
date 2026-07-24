---
title: "download_required"
description: "This content is too large to return inline and must be downloaded."
---

This content is too large to return inline and must be downloaded.

**How to resolve:** Use the download endpoint referenced in the error details.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "download_required",
    "message": "This content is too large to return inline and must be downloaded.",
    "docsUrl": "https://spacefast.com/docs/errors/download_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "files_mode_does_not_support_spa"
description: "SPA fallback cannot be combined with files-listing mode."
---

SPA fallback cannot be combined with files-listing mode.

**How to resolve:** Remove the SPA fallback or serve the space as a site instead of a file listing.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "files_mode_does_not_support_spa",
    "message": "SPA fallback cannot be combined with files-listing mode.",
    "docsUrl": "https://docs.spacefast.com/errors/files_mode_does_not_support_spa",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

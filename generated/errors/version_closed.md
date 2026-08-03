---
title: "version_closed"
description: "The version's upload session is closed. No more files can be added."
---

The version's upload session is closed. No more files can be added.

**How to resolve:** Start a new version for additional changes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_closed",
    "message": "The version's upload session is closed. No more files can be added.",
    "docsUrl": "https://docs.spacefast.com/errors/version_closed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

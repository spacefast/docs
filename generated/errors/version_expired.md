---
title: "version_expired"
description: "The version's upload session expired before it was finalized."
---

The version's upload session expired before it was finalized.

**How to resolve:** Start a new version and finalize within the session window.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_expired",
    "message": "The version's upload session expired before it was finalized.",
    "docsUrl": "https://spacefast.com/docs/errors/version_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

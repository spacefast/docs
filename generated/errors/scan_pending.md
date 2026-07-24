---
title: "scan_pending"
description: "The content is still being scanned for safety and cannot be served yet."
---

The content is still being scanned for safety and cannot be served yet.

**How to resolve:** Wait for the scan to finish; serving resumes automatically once it clears.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "scan_pending",
    "message": "The content is still being scanned for safety and cannot be served yet.",
    "docsUrl": "https://spacefast.com/docs/errors/scan_pending",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

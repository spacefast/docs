---
title: "maintenance_in_progress"
description: "This change is temporarily unavailable while maintenance finishes."
---

This change is temporarily unavailable while maintenance finishes.

**How to resolve:** Wait for the Retry-After window, then send the same request again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "maintenance_in_progress",
    "message": "This change is temporarily unavailable while maintenance finishes.",
    "docsUrl": "https://docs.spacefast.com/errors/maintenance_in_progress",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

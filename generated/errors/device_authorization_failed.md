---
title: "device_authorization_failed"
description: "The device login request failed and cannot be completed."
---

The device login request failed and cannot be completed.

**How to resolve:** Start a new device login flow.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "device_authorization_failed",
    "message": "The device login request failed and cannot be completed.",
    "docsUrl": "https://docs.spacefast.com/errors/device_authorization_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

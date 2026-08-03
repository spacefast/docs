---
title: "invalid_device_code"
description: "The device code is invalid or has expired."
---

The device code is invalid or has expired.

**How to resolve:** Start a new device login flow.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_device_code",
    "message": "The device code is invalid or has expired.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_device_code",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

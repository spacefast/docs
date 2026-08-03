---
title: "device_verification_rate_limited"
description: "Too many incorrect device codes were entered in a short window."
---

Too many incorrect device codes were entered in a short window.

**How to resolve:** Wait for the lockout to pass, then enter the code shown by your CLI exactly.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "device_verification_rate_limited",
    "message": "Too many incorrect device codes were entered in a short window.",
    "docsUrl": "https://docs.spacefast.com/errors/device_verification_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

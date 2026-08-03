---
title: "claim_blocked_takedown"
description: "This space is under an abuse takedown and cannot be claimed."
---

This space is under an abuse takedown and cannot be claimed.

**How to resolve:** Contact support if you believe the takedown is a mistake.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "claim_blocked_takedown",
    "message": "This space is under an abuse takedown and cannot be claimed.",
    "docsUrl": "https://docs.spacefast.com/errors/claim_blocked_takedown",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "ip_blocked"
description: "Requests from this IP address are blocked for abuse or policy reasons."
---

Requests from this IP address are blocked for abuse or policy reasons.

**How to resolve:** Contact support with your IP address if you believe this block is in error.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "ip_blocked",
    "message": "Requests from this IP address are blocked for abuse or policy reasons.",
    "docsUrl": "https://spacefast.com/docs/errors/ip_blocked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

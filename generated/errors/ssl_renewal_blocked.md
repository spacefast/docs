---
title: "ssl_renewal_blocked"
description: "SSL certificate renewal is blocked for this hostname."
---

SSL certificate renewal is blocked for this hostname.

**How to resolve:** Verify DNS still points at Spacefast, then retry SSL issuance.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "ssl_renewal_blocked",
    "message": "SSL certificate renewal is blocked for this hostname.",
    "docsUrl": "https://spacefast.com/docs/errors/ssl_renewal_blocked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

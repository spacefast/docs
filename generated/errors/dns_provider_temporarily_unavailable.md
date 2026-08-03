---
title: "dns_provider_temporarily_unavailable"
description: "The DNS provider is rate-limited, degraded, or temporarily unavailable."
---

The DNS provider is rate-limited, degraded, or temporarily unavailable.

**How to resolve:** Wait for the retry time in the error details or operation receipt, then retry the DNS operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_temporarily_unavailable",
    "message": "The DNS provider is rate-limited, degraded, or temporarily unavailable.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_temporarily_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

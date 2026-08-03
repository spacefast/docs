---
title: "dns_provider_rate_limited"
description: "The DNS provider rate-limited the requested operation."
---

The DNS provider rate-limited the requested operation.

**How to resolve:** Wait for the retry window in the error details, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_rate_limited",
    "message": "The DNS provider rate-limited the requested operation.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

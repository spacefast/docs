---
title: "dns_provider_credentials_expired"
description: "The DNS provider credentials have expired or were revoked."
---

The DNS provider credentials have expired or were revoked.

**How to resolve:** Reconnect the provider account or replace the API token.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_credentials_expired",
    "message": "The DNS provider credentials have expired or were revoked.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_credentials_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

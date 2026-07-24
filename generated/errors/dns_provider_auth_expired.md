---
title: "dns_provider_auth_expired"
description: "The connected DNS provider authorization expired or was revoked."
---

The connected DNS provider authorization expired or was revoked.

**How to resolve:** Reconnect the provider account for the affected connection, refresh the zone, then retry the DNS operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_auth_expired",
    "message": "The connected DNS provider authorization expired or was revoked.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_auth_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "dns_provider_missing_permission"
description: "The connected DNS provider account lacks the required permission."
---

The connected DNS provider account lacks the required permission.

**How to resolve:** Reconnect with the required scope or use a provider credential that can edit this zone.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_missing_permission",
    "message": "The connected DNS provider account lacks the required permission.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_missing_permission",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

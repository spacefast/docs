---
title: "dns_provider_zone_not_found"
description: "The connected DNS provider zone could not be found."
---

The connected DNS provider zone could not be found.

**How to resolve:** Refresh the provider account, reattach the zone, or reconnect the provider.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_zone_not_found",
    "message": "The connected DNS provider zone could not be found.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_zone_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

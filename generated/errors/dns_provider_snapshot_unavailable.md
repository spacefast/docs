---
title: "dns_provider_snapshot_unavailable"
description: "Spacefast could not cache the latest DNS provider snapshot."
---

Spacefast could not cache the latest DNS provider snapshot.

**How to resolve:** Retry refresh after the cache or provider recovers; do not edit connected-provider records from stale data.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_snapshot_unavailable",
    "message": "Spacefast could not cache the latest DNS provider snapshot.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_snapshot_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

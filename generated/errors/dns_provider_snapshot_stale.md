---
title: "dns_provider_snapshot_stale"
description: "The cached DNS provider snapshot is stale."
---

The cached DNS provider snapshot is stale.

**How to resolve:** Refresh the provider snapshot, review the new diff, and retry the change against the latest record ids.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_snapshot_stale",
    "message": "The cached DNS provider snapshot is stale.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_snapshot_stale",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

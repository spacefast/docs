---
title: "dns_provider_not_connected"
description: "This domain has no connected DNS provider zone."
---

This domain has no connected DNS provider zone.

**How to resolve:** Attach a provider zone or move the domain to Spacefast-managed DNS before retrying.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_not_connected",
    "message": "This domain has no connected DNS provider zone.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_not_connected",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

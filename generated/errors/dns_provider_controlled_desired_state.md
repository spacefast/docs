---
title: "dns_provider_controlled_desired_state"
description: "This DNS provider is controlled through desired-state templates instead of direct record edits."
---

This DNS provider is controlled through desired-state templates instead of direct record edits.

**How to resolve:** Use the provider workflow template or primary-domain action for this provider-managed zone.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_controlled_desired_state",
    "message": "This DNS provider is controlled through desired-state templates instead of direct record edits.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_controlled_desired_state",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

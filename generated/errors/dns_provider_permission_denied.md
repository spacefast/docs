---
title: "dns_provider_permission_denied"
description: "The connected DNS provider denied permission for this zone or action."
---

The connected DNS provider denied permission for this zone or action.

**How to resolve:** Grant DNS edit access for this zone, reconnect with broader scopes, or connect a different provider account.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_permission_denied",
    "message": "The connected DNS provider denied permission for this zone or action.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_permission_denied",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

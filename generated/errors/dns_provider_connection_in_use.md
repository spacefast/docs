---
title: "dns_provider_connection_in_use"
description: "The DNS provider connection is still attached to one or more zones."
---

The DNS provider connection is still attached to one or more zones.

**How to resolve:** Detach or migrate attached zones before revoking the connection.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_connection_in_use",
    "message": "The DNS provider connection is still attached to one or more zones.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_connection_in_use",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

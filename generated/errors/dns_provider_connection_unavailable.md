---
title: "dns_provider_connection_unavailable"
description: "The DNS provider connection cannot currently be used."
---

The DNS provider connection cannot currently be used.

**How to resolve:** Reconnect, re-enable, or replace the provider connection before retrying.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_connection_unavailable",
    "message": "The DNS provider connection cannot currently be used.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_connection_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

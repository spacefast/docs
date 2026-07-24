---
title: "dns_provider_future_authoritative_backend"
description: "This domain uses a future Spacefast authoritative DNS backend adapter."
---

This domain uses a future Spacefast authoritative DNS backend adapter.

**How to resolve:** Use the provider-neutral DNS endpoints and rely on the advertised capabilities for supported actions.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_future_authoritative_backend",
    "message": "This domain uses a future Spacefast authoritative DNS backend adapter.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_future_authoritative_backend",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

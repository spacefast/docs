---
title: "free_external_proxy_disabled"
description: "Proxy routes to external upstreams are not available on the Free plan."
---

Proxy routes to external upstreams are not available on the Free plan.

**How to resolve:** Remove the proxy rules before publishing. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "free_external_proxy_disabled",
    "message": "Proxy routes to external upstreams are not available on the Free plan.",
    "docsUrl": "https://docs.spacefast.com/errors/free_external_proxy_disabled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

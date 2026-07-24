---
title: "proxy_upstream_denied"
description: "The proxy upstream is on a denied network and cannot be used."
---

The proxy upstream is on a denied network and cannot be used.

**How to resolve:** Proxy only to public HTTPS upstreams; private and internal addresses are blocked.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "proxy_upstream_denied",
    "message": "The proxy upstream is on a denied network and cannot be used.",
    "docsUrl": "https://spacefast.com/docs/errors/proxy_upstream_denied",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "proxy_upstream_unresolved"
description: "The proxy upstream hostname could not be resolved."
---

The proxy upstream hostname could not be resolved.

**How to resolve:** Verify the upstream DNS name resolves publicly, then publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "proxy_upstream_unresolved",
    "message": "The proxy upstream hostname could not be resolved.",
    "docsUrl": "https://spacefast.com/docs/errors/proxy_upstream_unresolved",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

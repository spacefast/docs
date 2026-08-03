---
title: "cache_purge_domain_required"
description: "A purge request must name the domain to purge."
---

A purge request must name the domain to purge.

**How to resolve:** Pass the domain to purge in the request.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "cache_purge_domain_required",
    "message": "A purge request must name the domain to purge.",
    "docsUrl": "https://docs.spacefast.com/errors/cache_purge_domain_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "domain_hostname_site_mismatch"
description: "All bindings of one hostname must point at spaces on the same underlying site."
---

All bindings of one hostname must point at spaces on the same underlying site.

**How to resolve:** Bind the hostname to spaces on the same site, or remove the conflicting binding.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_hostname_site_mismatch",
    "message": "All bindings of one hostname must point at spaces on the same underlying site.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_hostname_site_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

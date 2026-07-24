---
title: "domain_facet_external"
description: "This facet of the domain is managed outside Spacefast."
---

This facet of the domain is managed outside Spacefast.

**How to resolve:** Manage that facet at its external provider, or move it to Spacefast first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_facet_external",
    "message": "This facet of the domain is managed outside Spacefast.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_facet_external",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

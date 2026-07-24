---
title: "domain_facet_already_managed"
description: "This facet of the domain is already managed by Spacefast."
---

This facet of the domain is already managed by Spacefast.

**How to resolve:** No action is needed; the facet is already active.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_facet_already_managed",
    "message": "This facet of the domain is already managed by Spacefast.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_facet_already_managed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

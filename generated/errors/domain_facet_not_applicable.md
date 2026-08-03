---
title: "domain_facet_not_applicable"
description: "The requested facet does not apply to this domain."
---

The requested facet does not apply to this domain.

**How to resolve:** Check the domain's facets and use one that applies.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_facet_not_applicable",
    "message": "The requested facet does not apply to this domain.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_facet_not_applicable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

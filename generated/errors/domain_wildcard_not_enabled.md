---
title: "domain_wildcard_not_enabled"
description: "Wildcard hostnames are not enabled for this domain or plan."
---

Wildcard hostnames are not enabled for this domain or plan.

**How to resolve:** Bind concrete hostnames, or enable wildcard support for the domain.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_wildcard_not_enabled",
    "message": "Wildcard hostnames are not enabled for this domain or plan.",
    "docsUrl": "https://spacefast.com/docs/errors/domain_wildcard_not_enabled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

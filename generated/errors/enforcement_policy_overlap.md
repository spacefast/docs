---
title: "enforcement_policy_overlap"
description: "Enforcement policy severity ranges overlap within a category."
---

Enforcement policy severity ranges overlap within a category.

**How to resolve:** Adjust the category ranges so each severity is covered by at most one policy.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "enforcement_policy_overlap",
    "message": "Enforcement policy severity ranges overlap within a category.",
    "docsUrl": "https://spacefast.com/docs/errors/enforcement_policy_overlap",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

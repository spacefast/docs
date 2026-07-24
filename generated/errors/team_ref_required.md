---
title: "team_ref_required"
description: "A team reference is required for this operation."
---

A team reference is required for this operation.

**How to resolve:** Pass the team id or slug.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "team_ref_required",
    "message": "A team reference is required for this operation.",
    "docsUrl": "https://spacefast.com/docs/errors/team_ref_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

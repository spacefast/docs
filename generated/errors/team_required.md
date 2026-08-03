---
title: "team_required"
description: "This operation requires an acting team."
---

This operation requires an acting team.

**How to resolve:** Choose a team or pass a team reference.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "team_required",
    "message": "This operation requires an acting team.",
    "docsUrl": "https://docs.spacefast.com/errors/team_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

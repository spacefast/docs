---
title: "team_slug_conflict"
description: "The team slug is already taken."
---

The team slug is already taken.

**How to resolve:** Choose a different slug.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "team_slug_conflict",
    "message": "The team slug is already taken.",
    "docsUrl": "https://spacefast.com/docs/errors/team_slug_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

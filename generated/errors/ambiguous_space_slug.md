---
title: "ambiguous_space_slug"
description: "The slug matches spaces in more than one of your teams, so it cannot be resolved."
---

The slug matches spaces in more than one of your teams, so it cannot be resolved.

**How to resolve:** Pass a teamRef alongside the slug, or reference the space by its spc_ id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "ambiguous_space_slug",
    "message": "The slug matches spaces in more than one of your teams, so it cannot be resolved.",
    "docsUrl": "https://spacefast.com/docs/errors/ambiguous_space_slug",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

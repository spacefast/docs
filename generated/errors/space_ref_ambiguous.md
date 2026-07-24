---
title: "space_ref_ambiguous"
description: "The space reference matches more than one accessible space."
---

The space reference matches more than one accessible space.

**How to resolve:** Use the spc_ id, or scope the reference with a teamRef.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_ref_ambiguous",
    "message": "The space reference matches more than one accessible space.",
    "docsUrl": "https://spacefast.com/docs/errors/space_ref_ambiguous",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

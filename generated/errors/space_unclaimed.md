---
title: "space_unclaimed"
description: "This operation requires a claimed space."
---

This operation requires a claimed space.

**How to resolve:** Claim the space first using its claim URL.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_unclaimed",
    "message": "This operation requires a claimed space.",
    "docsUrl": "https://spacefast.com/docs/errors/space_unclaimed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

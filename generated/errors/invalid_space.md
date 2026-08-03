---
title: "invalid_space"
description: "The space reference is invalid."
---

The space reference is invalid.

**How to resolve:** Pass a valid spc_ id, slug, or hostname.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_space",
    "message": "The space reference is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_space",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

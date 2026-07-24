---
title: "space_has_active_version"
description: "The space still has an active version, which blocks this operation."
---

The space still has an active version, which blocks this operation.

**How to resolve:** Delete or supersede the active version first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_has_active_version",
    "message": "The space still has an active version, which blocks this operation.",
    "docsUrl": "https://spacefast.com/docs/errors/space_has_active_version",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

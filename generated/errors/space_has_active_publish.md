---
title: "space_has_active_publish"
description: "The space has a publish in progress, which blocks this operation."
---

The space has a publish in progress, which blocks this operation.

**How to resolve:** Wait for the publish to finish or cancel it, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_has_active_publish",
    "message": "The space has a publish in progress, which blocks this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/space_has_active_publish",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

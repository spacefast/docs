---
title: "space_not_disabled"
description: "The space is not disabled, so it cannot be restored."
---

The space is not disabled, so it cannot be restored.

**How to resolve:** No action needed. The space is already active.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_not_disabled",
    "message": "The space is not disabled, so it cannot be restored.",
    "docsUrl": "https://docs.spacefast.com/errors/space_not_disabled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

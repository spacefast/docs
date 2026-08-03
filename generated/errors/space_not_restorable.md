---
title: "space_not_restorable"
description: "The space is past its recovery window and cannot be restored."
---

The space is past its recovery window and cannot be restored.

**How to resolve:** Publish the content to a new space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_not_restorable",
    "message": "The space is past its recovery window and cannot be restored.",
    "docsUrl": "https://docs.spacefast.com/errors/space_not_restorable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

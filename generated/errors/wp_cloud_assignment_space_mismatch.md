---
title: "wp_cloud_assignment_space_mismatch"
description: "The domain assignment belongs to a different space."
---

The domain assignment belongs to a different space.

**How to resolve:** Use the assignment's owning space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_assignment_space_mismatch",
    "message": "The domain assignment belongs to a different space.",
    "docsUrl": "https://docs.spacefast.com/errors/wp_cloud_assignment_space_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "static_mount_path_conflict"
description: "The requested mount path overlaps another static mount on this space."
---

The requested mount path overlaps another static mount on this space.

**How to resolve:** Choose a path that is not equal to, above, or below an existing mount path.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_path_conflict",
    "message": "The requested mount path overlaps another static mount on this space.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_path_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

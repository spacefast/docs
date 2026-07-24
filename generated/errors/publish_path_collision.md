---
title: "publish_path_collision"
description: "Two entries in the publish payload normalize to the same path."
---

Two entries in the publish payload normalize to the same path.

**How to resolve:** Remove the duplicate; each path may appear once across files and deletes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_path_collision",
    "message": "Two entries in the publish payload normalize to the same path.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_path_collision",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

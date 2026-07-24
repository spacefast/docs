---
title: "zero_artifact_unreadable"
description: "The Zero endpoint artifact could not be read by the runtime."
---

The Zero endpoint artifact could not be read by the runtime.

**How to resolve:** Verify the version finalized with all generated Zero files present.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_unreadable",
    "message": "The Zero endpoint artifact could not be read by the runtime.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_artifact_unreadable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

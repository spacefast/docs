---
title: "runtime_upload_required"
description: "This step requires uploaded content that has not arrived yet."
---

This step requires uploaded content that has not arrived yet.

**How to resolve:** Complete the uploads for this session, then retry the step.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_upload_required",
    "message": "This step requires uploaded content that has not arrived yet.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_upload_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

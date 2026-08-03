---
title: "publish_file_missing"
description: "A declared file was never uploaded, so the publish cannot finalize."
---

A declared file was never uploaded, so the publish cannot finalize.

**How to resolve:** Upload every declared file, or resume the upload session to see what is missing.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_file_missing",
    "message": "A declared file was never uploaded, so the publish cannot finalize.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_file_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

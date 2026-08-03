---
title: "publish_upload_failed"
description: "Uploading the publish content failed."
---

Uploading the publish content failed.

**How to resolve:** Retry the publish. Partial uploads are resumable through the upload session.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_upload_failed",
    "message": "Uploading the publish content failed.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_upload_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

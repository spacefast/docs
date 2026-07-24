---
title: "runtime_upload_operation_not_supported"
description: "The runtime upload session does not support this operation."
---

The runtime upload session does not support this operation.

**How to resolve:** Follow the upload instructions returned when the session was created.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_upload_operation_not_supported",
    "message": "The runtime upload session does not support this operation.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_upload_operation_not_supported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

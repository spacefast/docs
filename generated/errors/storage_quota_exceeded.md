---
title: "storage_quota_exceeded"
description: "The operation would exceed its storage allowance."
---

The operation would exceed its storage allowance.

**How to resolve:** Delete unused Zero objects or old versions, reduce the upload size, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_quota_exceeded",
    "message": "The operation would exceed its storage allowance.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

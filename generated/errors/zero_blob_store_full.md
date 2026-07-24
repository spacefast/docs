---
title: "zero_blob_store_full"
description: "The local Zero blob store reached its configured size limit."
---

The local Zero blob store reached its configured size limit.

**How to resolve:** Delete local blobs or raise the dev blob store limit.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_blob_store_full",
    "message": "The local Zero blob store reached its configured size limit.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_blob_store_full",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

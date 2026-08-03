---
title: "upload_hash_mismatch"
description: "An uploaded file's bytes do not match the declared sha256."
---

An uploaded file's bytes do not match the declared sha256.

**How to resolve:** Re-hash the local file and upload it again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "upload_hash_mismatch",
    "message": "An uploaded file's bytes do not match the declared sha256.",
    "docsUrl": "https://docs.spacefast.com/errors/upload_hash_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "publish_hash_mismatch"
description: "Publish content does not match its declared sha256."
---

Publish content does not match its declared sha256.

**How to resolve:** Re-send the file with matching bytes, or correct the declared hash.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_hash_mismatch",
    "message": "Publish content does not match its declared sha256.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_hash_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

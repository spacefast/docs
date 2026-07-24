---
title: "zero_source_hash_mismatch"
description: "The Zero endpoint source hash does not match its artifact metadata."
---

The Zero endpoint source hash does not match its artifact metadata.

**How to resolve:** Rebuild and republish so source and endpoint metadata are from the same build.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_source_hash_mismatch",
    "message": "The Zero endpoint source hash does not match its artifact metadata.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_source_hash_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

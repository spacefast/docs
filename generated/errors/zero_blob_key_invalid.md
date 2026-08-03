---
title: "zero_blob_key_invalid"
description: "The local Zero blob key is invalid."
---

The local Zero blob key is invalid.

**How to resolve:** Use a non-empty blob key without unsafe path segments.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_blob_key_invalid",
    "message": "The local Zero blob key is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_blob_key_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

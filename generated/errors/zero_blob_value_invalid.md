---
title: "zero_blob_value_invalid"
description: "The local Zero blob request body is invalid."
---

The local Zero blob request body is invalid.

**How to resolve:** Send a valid blob body within the configured local size limits.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_blob_value_invalid",
    "message": "The local Zero blob request body is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_blob_value_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

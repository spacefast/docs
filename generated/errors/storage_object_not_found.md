---
title: "storage_object_not_found"
description: "The requested Zero storage object does not exist."
---

The requested Zero storage object does not exist.

**How to resolve:** Check the object key or upload the object again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_object_not_found",
    "message": "The requested Zero storage object does not exist.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_object_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

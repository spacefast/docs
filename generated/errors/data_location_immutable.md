---
title: "data_location_immutable"
description: "This request tried to change data location through an immutable path."
---

This request tried to change data location through an immutable path.

**How to resolve:** Data location is fixed when the space is created and cannot be changed afterwards. Create a new space in the region you want.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "data_location_immutable",
    "message": "This request tried to change data location through an immutable path.",
    "docsUrl": "https://docs.spacefast.com/errors/data_location_immutable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

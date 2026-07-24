---
title: "data_location_immutable"
description: "This request tried to change data location through an immutable path."
---

This request tried to change data location through an immutable path.

**How to resolve:** Use PATCH /v1/spaces/{id} to queue a region move when region changes are supported for this space.

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
    "docsUrl": "https://spacefast.com/docs/errors/data_location_immutable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

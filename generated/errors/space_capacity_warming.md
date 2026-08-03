---
title: "space_capacity_warming"
description: "This space is waiting on serving capacity that is being provisioned in the background."
---

This space is waiting on serving capacity that is being provisioned in the background.

**How to resolve:** Wait for the Retry-After window, then send the same publish again. No version was created and no files were uploaded.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_capacity_warming",
    "message": "This space is waiting on serving capacity that is being provisioned in the background.",
    "docsUrl": "https://docs.spacefast.com/errors/space_capacity_warming",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

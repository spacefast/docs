---
title: "wp_cloud_client_in_use"
description: "The provider client is in use and cannot be removed."
---

The provider client is in use and cannot be removed.

**How to resolve:** Reassign or delete the dependent sites first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_client_in_use",
    "message": "The provider client is in use and cannot be removed.",
    "docsUrl": "https://docs.spacefast.com/errors/wp_cloud_client_in_use",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

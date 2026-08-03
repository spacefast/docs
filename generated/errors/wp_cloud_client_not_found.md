---
title: "wp_cloud_client_not_found"
description: "The provider client was not found."
---

The provider client was not found.

**How to resolve:** Verify the provider client id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_client_not_found",
    "message": "The provider client was not found.",
    "docsUrl": "https://docs.spacefast.com/errors/wp_cloud_client_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

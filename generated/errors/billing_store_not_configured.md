---
title: "billing_store_not_configured"
description: "App Store or Google Play billing is not configured on this deployment."
---

App Store or Google Play billing is not configured on this deployment.

**How to resolve:** Use another billing method, or configure the store credentials on the server.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "billing_store_not_configured",
    "message": "App Store or Google Play billing is not configured on this deployment.",
    "docsUrl": "https://docs.spacefast.com/errors/billing_store_not_configured",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "zero_shopify_unavailable"
description: "The local Zero Shopify service is not configured."
---

The local Zero Shopify service is not configured.

**How to resolve:** Configure a Shopify handler for zero dev before calling the Shopify service.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_shopify_unavailable",
    "message": "The local Zero Shopify service is not configured.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_shopify_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

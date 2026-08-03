---
title: "billing_unknown_product"
description: "The purchased store product does not map to any plan sold by this deployment."
---

The purchased store product does not map to any plan sold by this deployment.

**How to resolve:** Check the product id against the store catalog returned by the billing endpoints.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "billing_unknown_product",
    "message": "The purchased store product does not map to any plan sold by this deployment.",
    "docsUrl": "https://docs.spacefast.com/errors/billing_unknown_product",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>

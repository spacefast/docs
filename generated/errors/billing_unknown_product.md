---
title: "billing_unknown_product"
description: "The purchased store product does not map to any plan sold by this deployment."
---

The purchased store product does not map to any plan sold by this deployment.

**How to resolve:** Check the product id against the store catalog returned by the billing endpoints.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/billing_unknown_product",
  "title": "Billing unknown product",
  "status": 400,
  "detail": "The purchased store product does not map to any plan sold by this deployment.",
  "code": "billing_unknown_product",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

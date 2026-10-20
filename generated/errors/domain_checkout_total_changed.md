---
title: "domain_checkout_total_changed"
description: "The live price of the cart no longer matches the total you expected."
---

The live price of the cart no longer matches the total you expected.

**How to resolve:** Check the new total in `details`, then buy again with the updated `expectedTotalCents`.

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
  "type": "https://spacefast.com/docs/errors/domain_checkout_total_changed",
  "title": "Domain checkout total changed",
  "status": 400,
  "detail": "The live price of the cart no longer matches the total you expected.",
  "code": "domain_checkout_total_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

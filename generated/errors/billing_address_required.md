---
title: "billing_address_required"
description: "The paying team has no billing address, so tax can't be worked out for this purchase."
---

The paying team has no billing address, so tax can't be worked out for this purchase.

**How to resolve:** Ask an admin of the team in details.billingTeamId to add a billing address, then buy again.

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
  "type": "https://spacefast.com/docs/errors/billing_address_required",
  "title": "Billing address required",
  "status": 400,
  "detail": "The paying team has no billing address, so tax can't be worked out for this purchase.",
  "code": "billing_address_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "sell_shipment_conflict"
description: "The physical order cannot be marked shipped with the requested tracking reference."
---

The physical order cannot be marked shipped with the requested tracking reference.

**How to resolve:** Read the current order. Ship only paid orders with a valid shipping address that have not been cancelled. Repeat an existing shipment with its original tracking reference.

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
  "type": "https://spacefast.com/docs/errors/sell_shipment_conflict",
  "title": "Sell shipment conflict",
  "status": 400,
  "detail": "The physical order cannot be marked shipped with the requested tracking reference.",
  "code": "sell_shipment_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

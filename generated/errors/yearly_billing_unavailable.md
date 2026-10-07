---
title: "yearly_billing_unavailable"
description: "Yearly billing is no longer offered. Every plan bills monthly."
---

Yearly billing is no longer offered. Every plan bills monthly.

**How to resolve:** Send the request again with `billingInterval` set to `monthly`, or leave it out.

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
  "type": "https://spacefast.com/docs/errors/yearly_billing_unavailable",
  "title": "Yearly billing unavailable",
  "status": 400,
  "detail": "Yearly billing is no longer offered. Every plan bills monthly.",
  "code": "yearly_billing_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

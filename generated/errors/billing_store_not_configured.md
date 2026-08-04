---
title: "billing_store_not_configured"
description: "App Store or Google Play billing is not configured on this deployment."
---

App Store or Google Play billing is not configured on this deployment.

**How to resolve:** Use another billing method, or configure the store credentials on the server.

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
  "type": "https://spacefast.com/docs/errors/billing_store_not_configured",
  "title": "Billing store not configured",
  "status": 400,
  "detail": "App Store or Google Play billing is not configured on this deployment.",
  "code": "billing_store_not_configured",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

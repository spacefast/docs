---
title: "issuer_tenant_occupied"
description: "This tenant already has a pending or active partner token issuer."
---

This tenant already has a pending or active partner token issuer.

**How to resolve:** Activate or revoke the tenant's existing issuer before registering another one.

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
  "type": "https://spacefast.com/docs/errors/issuer_tenant_occupied",
  "title": "Issuer tenant occupied",
  "status": 400,
  "detail": "This tenant already has a pending or active partner token issuer.",
  "code": "issuer_tenant_occupied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

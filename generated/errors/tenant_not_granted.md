---
title: "tenant_not_granted"
description: "Your credential has no grant on the requested tenant."
---

Your credential has no grant on the requested tenant.

**How to resolve:** Use a credential issued for this tenant.

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
  "type": "https://spacefast.com/docs/errors/tenant_not_granted",
  "title": "Tenant not granted",
  "status": 400,
  "detail": "Your credential has no grant on the requested tenant.",
  "code": "tenant_not_granted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

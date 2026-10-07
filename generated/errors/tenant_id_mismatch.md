---
title: "tenant_id_mismatch"
description: "The resource belongs to a different tenant than the request."
---

The resource belongs to a different tenant than the request.

**How to resolve:** Use a credential and tenant header matching the resource's tenant.

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
  "type": "https://spacefast.com/docs/errors/tenant_id_mismatch",
  "title": "Tenant id mismatch",
  "status": 400,
  "detail": "The resource belongs to a different tenant than the request.",
  "code": "tenant_id_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

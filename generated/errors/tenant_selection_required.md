---
title: "tenant_selection_required"
description: "The credential spans multiple tenants, so the request must select one."
---

The credential spans multiple tenants, so the request must select one.

**How to resolve:** Send the tenant header naming the tenant to act on.

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
  "type": "https://spacefast.com/docs/errors/tenant_selection_required",
  "title": "Tenant selection required",
  "status": 400,
  "detail": "The credential spans multiple tenants, so the request must select one.",
  "code": "tenant_selection_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

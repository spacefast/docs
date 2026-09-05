---
title: "transfer_cross_tenant_unsupported"
description: "The transfer would move the Space to a team in another tenant."
---

The transfer would move the Space to a team in another tenant.

**How to resolve:** Transfer to a team inside the same tenant.

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
  "type": "https://spacefast.com/docs/errors/transfer_cross_tenant_unsupported",
  "title": "Transfer cross tenant unsupported",
  "status": 400,
  "detail": "The transfer would move the Space to a team in another tenant.",
  "code": "transfer_cross_tenant_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

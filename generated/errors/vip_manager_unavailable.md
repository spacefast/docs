---
title: "vip_manager_unavailable"
description: "The VIP Manager is not an active, verified account in the main Spacefast tenant."
---

The VIP Manager is not an active, verified account in the main Spacefast tenant.

**How to resolve:** Ask a superadmin to check the configured Manager account and restore its eligibility before retrying.

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
  "type": "https://spacefast.com/docs/errors/vip_manager_unavailable",
  "title": "Vip manager unavailable",
  "status": 400,
  "detail": "The VIP Manager is not an active, verified account in the main Spacefast tenant.",
  "code": "vip_manager_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

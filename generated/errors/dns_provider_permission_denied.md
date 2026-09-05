---
title: "dns_provider_permission_denied"
description: "The DNS provider refused the change for lack of permission."
---

The DNS provider refused the change for lack of permission.

**How to resolve:** Grant DNS edit access for this zone, or reconnect with broader provider scopes.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_permission_denied",
  "title": "Dns provider permission denied",
  "status": 400,
  "detail": "The DNS provider refused the change for lack of permission.",
  "code": "dns_provider_permission_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

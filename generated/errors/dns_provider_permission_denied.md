---
title: "dns_provider_permission_denied"
description: "The connected DNS provider denied permission for this zone or action."
---

The connected DNS provider denied permission for this zone or action.

**How to resolve:** Grant DNS edit access for this zone, reconnect with broader scopes, or connect a different provider account.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/dns_provider_permission_denied",
  "title": "Dns provider permission denied",
  "status": 400,
  "detail": "The connected DNS provider denied permission for this zone or action.",
  "code": "dns_provider_permission_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

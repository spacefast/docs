---
title: "dns_provider_auth_expired"
description: "The connected DNS provider authorization expired or was revoked."
---

The connected DNS provider authorization expired or was revoked.

**How to resolve:** Reconnect the provider account for the affected connection, refresh the zone, then retry the DNS operation.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_auth_expired",
  "title": "Dns provider auth expired",
  "status": 400,
  "detail": "The connected DNS provider authorization expired or was revoked.",
  "code": "dns_provider_auth_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "dns_provider_credentials_expired"
description: "The DNS provider credentials expired."
---

The DNS provider credentials expired.

**How to resolve:** Reconnect the DNS provider account or replace its API token, then refresh the provider zone.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_credentials_expired",
  "title": "Dns provider credentials expired",
  "status": 400,
  "detail": "The DNS provider credentials expired.",
  "code": "dns_provider_credentials_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

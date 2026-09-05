---
title: "dns_provider_not_connected"
description: "No DNS provider zone is connected to this domain."
---

No DNS provider zone is connected to this domain.

**How to resolve:** Connect a DNS provider zone to the domain, then retry.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_not_connected",
  "title": "Dns provider not connected",
  "status": 400,
  "detail": "No DNS provider zone is connected to this domain.",
  "code": "dns_provider_not_connected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

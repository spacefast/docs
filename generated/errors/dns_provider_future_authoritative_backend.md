---
title: "dns_provider_future_authoritative_backend"
description: "This domain uses a future Spacefast authoritative DNS backend adapter."
---

This domain uses a future Spacefast authoritative DNS backend adapter.

**How to resolve:** Use the provider-neutral DNS endpoints and rely on the advertised capabilities for supported actions.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_future_authoritative_backend",
  "title": "Dns provider future authoritative backend",
  "status": 400,
  "detail": "This domain uses a future Spacefast authoritative DNS backend adapter.",
  "code": "dns_provider_future_authoritative_backend",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

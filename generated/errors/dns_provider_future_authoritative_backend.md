---
title: "dns_provider_future_authoritative_backend"
description: "Spacefast authoritative DNS is modeled as a provider adapter so zones can migrate per nameserver family."
---

Spacefast authoritative DNS is modeled as a provider adapter so zones can migrate per nameserver family.

**How to resolve:** Keep calling the same DNS API; no change is needed for the backend behind the zone.

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
  "detail": "Spacefast authoritative DNS is modeled as a provider adapter so zones can migrate per nameserver family.",
  "code": "dns_provider_future_authoritative_backend",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

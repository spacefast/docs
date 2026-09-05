---
title: "dns_provider_connection_in_use"
description: "The DNS provider connection is still attached to a zone or held by another team."
---

The DNS provider connection is still attached to a zone or held by another team.

**How to resolve:** Detach the provider zones first. For a domain transfer, reconnect the provider under the target owner before transferring.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_connection_in_use",
  "title": "Dns provider connection in use",
  "status": 400,
  "detail": "The DNS provider connection is still attached to a zone or held by another team.",
  "code": "dns_provider_connection_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

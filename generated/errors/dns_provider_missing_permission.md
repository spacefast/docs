---
title: "dns_provider_missing_permission"
description: "The connected DNS provider account lacks permission on this zone."
---

The connected DNS provider account lacks permission on this zone.

**How to resolve:** Grant DNS edit access for the zone, or reconnect with the required provider scope.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_missing_permission",
  "title": "Dns provider missing permission",
  "status": 400,
  "detail": "The connected DNS provider account lacks permission on this zone.",
  "code": "dns_provider_missing_permission",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

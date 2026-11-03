---
title: "dns_backend_rejected"
description: "Spacefast DNS refused to serve the zone with this change, so the zone still serves its earlier records."
---

Spacefast DNS refused to serve the zone with this change, so the zone still serves its earlier records.

**How to resolve:** Read the reason in the error, then fix or delete the record it names. The change is saved, and fixing it publishes the zone again.

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
  "type": "https://spacefast.com/docs/errors/dns_backend_rejected",
  "title": "Dns backend rejected",
  "status": 400,
  "detail": "Spacefast DNS refused to serve the zone with this change, so the zone still serves its earlier records.",
  "code": "dns_backend_rejected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

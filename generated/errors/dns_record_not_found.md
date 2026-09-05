---
title: "dns_record_not_found"
description: "No DNS record with that ID exists in the zone."
---

No DNS record with that ID exists in the zone.

**How to resolve:** List the zone's records and send an ID from the current snapshot.

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
  "type": "https://spacefast.com/docs/errors/dns_record_not_found",
  "title": "Dns record not found",
  "status": 400,
  "detail": "No DNS record with that ID exists in the zone.",
  "code": "dns_record_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

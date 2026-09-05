---
title: "dns_export_required"
description: "Records still have to be created at the DNS provider before this domain works."
---

Records still have to be created at the DNS provider before this domain works.

**How to resolve:** Create the records listed in the response's required actions at the DNS provider.

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
  "type": "https://spacefast.com/docs/errors/dns_export_required",
  "title": "Dns export required",
  "status": 400,
  "detail": "Records still have to be created at the DNS provider before this domain works.",
  "code": "dns_export_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "dns_provider_field_unsupported"
description: "The DNS provider does not support a field in the requested record."
---

The DNS provider does not support a field in the requested record.

**How to resolve:** Remove the unsupported field, or use a record type the provider handles.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_field_unsupported",
  "title": "Dns provider field unsupported",
  "status": 400,
  "detail": "The DNS provider does not support a field in the requested record.",
  "code": "dns_provider_field_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

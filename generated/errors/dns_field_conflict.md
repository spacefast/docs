---
title: "dns_field_conflict"
description: "A CNAME or ALIAS record cannot sit beside other records at the same name."
---

A CNAME or ALIAS record cannot sit beside other records at the same name.

**How to resolve:** Remove the conflicting records at that name, or change the record type.

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
  "type": "https://spacefast.com/docs/errors/dns_field_conflict",
  "title": "Dns field conflict",
  "status": 400,
  "detail": "A CNAME or ALIAS record cannot sit beside other records at the same name.",
  "code": "dns_field_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

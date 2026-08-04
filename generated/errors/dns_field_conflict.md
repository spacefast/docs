---
title: "dns_field_conflict"
description: "Two DNS fields cannot be used together for this provider or record type."
---

Two DNS fields cannot be used together for this provider or record type.

**How to resolve:** Follow the capability rule in the error details and submit only the compatible fields.

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
  "detail": "Two DNS fields cannot be used together for this provider or record type.",
  "code": "dns_field_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

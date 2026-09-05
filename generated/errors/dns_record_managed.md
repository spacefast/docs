---
title: "dns_record_managed"
description: "The record is managed or protected, so the API will not write to it."
---

The record is managed or protected, so the API will not write to it.

**How to resolve:** Edit an unmanaged record instead, or detach the feature that owns this one.

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
  "type": "https://spacefast.com/docs/errors/dns_record_managed",
  "title": "Dns record managed",
  "status": 400,
  "detail": "The record is managed or protected, so the API will not write to it.",
  "code": "dns_record_managed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

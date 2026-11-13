---
title: "registrar_tld_maintenance"
description: "The registry for this domain ending is down for maintenance."
---

The registry for this domain ending is down for maintenance.

**How to resolve:** Nothing was registered and any payment was refunded. Try again in a few hours.

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
  "type": "https://spacefast.com/docs/errors/registrar_tld_maintenance",
  "title": "Registrar tld maintenance",
  "status": 400,
  "detail": "The registry for this domain ending is down for maintenance.",
  "code": "registrar_tld_maintenance",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

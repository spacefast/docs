---
title: "nameserver_divergence"
description: "The nameservers observed in public DNS differ from the ones assigned to this zone."
---

The nameservers observed in public DNS differ from the ones assigned to this zone.

**How to resolve:** Set the assigned nameservers at the registrar so the observed set matches.

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
  "type": "https://spacefast.com/docs/errors/nameserver_divergence",
  "title": "Nameserver divergence",
  "status": 400,
  "detail": "The nameservers observed in public DNS differ from the ones assigned to this zone.",
  "code": "nameserver_divergence",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

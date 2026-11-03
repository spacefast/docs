---
title: "registrar_nameservers_refused"
description: "The registry refused the nameserver change. Nothing changed."
---

The registry refused the nameserver change. Nothing changed.

**How to resolve:** Check that every nameserver hostname exists. A domain that is suspended, in a dispute or not active can't change nameservers until that is resolved.

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
  "type": "https://spacefast.com/docs/errors/registrar_nameservers_refused",
  "title": "Registrar nameservers refused",
  "status": 400,
  "detail": "The registry refused the nameserver change. Nothing changed.",
  "code": "registrar_nameservers_refused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

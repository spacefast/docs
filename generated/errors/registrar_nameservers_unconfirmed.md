---
title: "registrar_nameservers_unconfirmed"
description: "The registrar did not confirm the nameserver change. The registry may still apply it."
---

The registrar did not confirm the nameserver change. The registry may still apply it.

**How to resolve:** Send the same nameserver change again. A repeated change is safe and settles the delegation.

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
  "type": "https://spacefast.com/docs/errors/registrar_nameservers_unconfirmed",
  "title": "Registrar nameservers unconfirmed",
  "status": 400,
  "detail": "The registrar did not confirm the nameserver change. The registry may still apply it.",
  "code": "registrar_nameservers_unconfirmed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

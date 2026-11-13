---
title: "registrar_unavailable"
description: "The registrar could not be reached."
---

The registrar could not be reached.

**How to resolve:** Try again shortly. A domain you already paid for is retried automatically, and refunded if the registrar stays unreachable for a day. A nameserver change was not made.

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
  "type": "https://spacefast.com/docs/errors/registrar_unavailable",
  "title": "Registrar unavailable",
  "status": 400,
  "detail": "The registrar could not be reached.",
  "code": "registrar_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

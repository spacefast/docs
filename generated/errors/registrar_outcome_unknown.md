---
title: "registrar_outcome_unknown"
description: "The registrar has not confirmed whether the registration went through yet."
---

The registrar has not confirmed whether the registration went through yet.

**How to resolve:** Do not buy it again. We keep checking with the registrar until the domain registers or its payment is refunded.

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
  "type": "https://spacefast.com/docs/errors/registrar_outcome_unknown",
  "title": "Registrar outcome unknown",
  "status": 400,
  "detail": "The registrar has not confirmed whether the registration went through yet.",
  "code": "registrar_outcome_unknown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

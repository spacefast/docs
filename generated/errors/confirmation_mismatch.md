---
title: "confirmation_mismatch"
description: "The confirmation does not match the action terms it was issued for."
---

The confirmation does not match the action terms it was issued for.

**How to resolve:** Request a new confirmation for this exact action, or send the exact `confirmation` value the request asks for.

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
  "type": "https://spacefast.com/docs/errors/confirmation_mismatch",
  "title": "Confirmation mismatch",
  "status": 400,
  "detail": "The confirmation does not match the action terms it was issued for.",
  "code": "confirmation_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "registration_failed"
description: "The registrar refused the registration, so the payment for this domain was refunded."
---

The registrar refused the registration, so the payment for this domain was refunded.

**How to resolve:** Contact support with the `requestId` if you still want this domain.

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
  "type": "https://spacefast.com/docs/errors/registration_failed",
  "title": "Registration failed",
  "status": 400,
  "detail": "The registrar refused the registration, so the payment for this domain was refunded.",
  "code": "registration_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

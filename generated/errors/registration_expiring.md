---
title: "registration_expiring"
description: "The domain registration expires soon."
---

The domain registration expires soon.

**How to resolve:** Renew the registration, or turn auto-renew on for the domain.

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
  "type": "https://spacefast.com/docs/errors/registration_expiring",
  "title": "Registration expiring",
  "status": 400,
  "detail": "The domain registration expires soon.",
  "code": "registration_expiring",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

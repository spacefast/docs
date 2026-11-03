---
title: "registrant_contact_invalid"
description: "The registrar rejected the registrant contact, so the payment for this domain was refunded."
---

The registrar rejected the registrant contact, so the payment for this domain was refunded.

**How to resolve:** Fix the contact's details (address, phone, email), then buy the domain again.

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
  "type": "https://spacefast.com/docs/errors/registrant_contact_invalid",
  "title": "Registrant contact invalid",
  "status": 400,
  "detail": "The registrar rejected the registrant contact, so the payment for this domain was refunded.",
  "code": "registrant_contact_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

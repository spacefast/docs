---
title: "domain_contact_identity_locked"
description: "Only the person who saved this contact can change its name, company name, or email address."
---

Only the person who saved this contact can change its name, company name, or email address.

**How to resolve:** Ask them to make the change, or save a contact of your own. Other fields, like the address and phone, you can still edit.

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
  "type": "https://spacefast.com/docs/errors/domain_contact_identity_locked",
  "title": "Domain contact identity locked",
  "status": 400,
  "detail": "Only the person who saved this contact can change its name, company name, or email address.",
  "code": "domain_contact_identity_locked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

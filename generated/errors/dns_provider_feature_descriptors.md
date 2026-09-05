---
title: "dns_provider_feature_descriptors"
description: "Forwarding, email, DNSSEC, glue, and registrar changes are provider feature actions, not record fields."
---

Forwarding, email, DNSSEC, glue, and registrar changes are provider feature actions, not record fields.

**How to resolve:** Call the provider feature action for the change instead of writing the field on a record.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_feature_descriptors",
  "title": "Dns provider feature descriptors",
  "status": 400,
  "detail": "Forwarding, email, DNSSEC, glue, and registrar changes are provider feature actions, not record fields.",
  "code": "dns_provider_feature_descriptors",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

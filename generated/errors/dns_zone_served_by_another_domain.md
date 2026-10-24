---
title: "dns_zone_served_by_another_domain"
description: "The change is saved, but another Spacefast domain record already serves DNS for this hostname."
---

The change is saved, but another Spacefast domain record already serves DNS for this hostname.

**How to resolve:** Edit DNS on the domain record that serves the hostname, or remove that record first.

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
  "type": "https://spacefast.com/docs/errors/dns_zone_served_by_another_domain",
  "title": "Dns zone served by another domain",
  "status": 400,
  "detail": "The change is saved, but another Spacefast domain record already serves DNS for this hostname.",
  "code": "dns_zone_served_by_another_domain",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

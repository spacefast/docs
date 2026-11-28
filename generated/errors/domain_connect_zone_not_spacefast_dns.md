---
title: "domain_connect_zone_not_spacefast_dns"
description: "Domain Connect templates apply only to domains whose DNS Spacefast serves."
---

Domain Connect templates apply only to domains whose DNS Spacefast serves.

**How to resolve:** Move the domain to Spacefast DNS, or apply the template at the DNS host serving it now.

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
  "type": "https://spacefast.com/docs/errors/domain_connect_zone_not_spacefast_dns",
  "title": "Domain connect zone not spacefast dns",
  "status": 422,
  "detail": "Domain Connect templates apply only to domains whose DNS Spacefast serves.",
  "code": "domain_connect_zone_not_spacefast_dns",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

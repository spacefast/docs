---
title: "sso_domain_dns_unavailable"
description: "Public DNS could not be checked for the domain's TXT record."
---

Public DNS could not be checked for the domain's TXT record.

**How to resolve:** Check again shortly. The domain stays pending.

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
  "type": "https://spacefast.com/docs/errors/sso_domain_dns_unavailable",
  "title": "Sso domain dns unavailable",
  "status": 422,
  "detail": "Public DNS could not be checked for the domain's TXT record.",
  "code": "sso_domain_dns_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

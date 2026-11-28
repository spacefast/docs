---
title: "sso_domain_txt_missing"
description: "The domain's TXT record was not found in public DNS."
---

The domain's TXT record was not found in public DNS.

**How to resolve:** Add the TXT record shown on the domain, wait for DNS to update, then check again.

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
  "type": "https://spacefast.com/docs/errors/sso_domain_txt_missing",
  "title": "Sso domain txt missing",
  "status": 422,
  "detail": "The domain's TXT record was not found in public DNS.",
  "code": "sso_domain_txt_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

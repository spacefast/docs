---
title: "domain_purchase_apex_required"
description: "Only a registrable apex domain (like `example.com`) can be bought, not a subdomain."
---

Only a registrable apex domain (like `example.com`) can be bought, not a subdomain.

**How to resolve:** Buy the apex at the `pointer`, then add the subdomain as a DNS record.

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
  "type": "https://spacefast.com/docs/errors/domain_purchase_apex_required",
  "title": "Domain purchase apex required",
  "status": 400,
  "detail": "Only a registrable apex domain (like `example.com`) can be bought, not a subdomain.",
  "code": "domain_purchase_apex_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

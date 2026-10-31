---
title: "dns_zone_ownership_unproven"
description: "The change is saved, but Spacefast DNS serves this delegated domain only after you prove you control it."
---

The change is saved, but Spacefast DNS serves this delegated domain only after you prove you control it.

**How to resolve:** Use the name and value in `details.proofRecord` to add the TXT proof at the provider serving DNS now, before switching nameservers. If already delegated too early, follow the diagnostic to restore the previous provider, prove ownership, then switch back. Repeating the saved change does not prove ownership. See [Domains and DNS](/docs/domains/).

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
  "type": "https://spacefast.com/docs/errors/dns_zone_ownership_unproven",
  "title": "Dns zone ownership unproven",
  "status": 400,
  "detail": "The change is saved, but Spacefast DNS serves this delegated domain only after you prove you control it.",
  "code": "dns_zone_ownership_unproven",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

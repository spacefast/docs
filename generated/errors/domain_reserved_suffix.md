---
title: "domain_reserved_suffix"
description: "The hostname is under a Spacefast-managed suffix and cannot be added as a domain."
---

The hostname is under a Spacefast-managed suffix and cannot be added as a domain.

**How to resolve:** Use a domain you own. Spacefast assigns default hostnames automatically.

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
  "type": "https://spacefast.com/docs/errors/domain_reserved_suffix",
  "title": "Domain reserved suffix",
  "status": 400,
  "detail": "The hostname is under a Spacefast-managed suffix and cannot be added as a domain.",
  "code": "domain_reserved_suffix",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

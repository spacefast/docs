---
title: "managed_domain_protected"
description: "The hostname is a managed Spacefast hostname and cannot be added as a custom domain."
---

The hostname is a managed Spacefast hostname and cannot be added as a custom domain.

**How to resolve:** Add a hostname on a domain the caller controls instead.

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
  "type": "https://spacefast.com/docs/errors/managed_domain_protected",
  "title": "Managed domain protected",
  "status": 400,
  "detail": "The hostname is a managed Spacefast hostname and cannot be added as a custom domain.",
  "code": "managed_domain_protected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

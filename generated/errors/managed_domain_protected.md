---
title: "managed_domain_protected"
description: "This is a system-managed view.fast hostname and cannot be mutated like a custom domain."
---

This is a system-managed view.fast hostname and cannot be mutated like a custom domain.

**How to resolve:** Use it as a read-only managed hostname, or add a custom domain if you need editable DNS and binding controls.

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
  "detail": "This is a system-managed view.fast hostname and cannot be mutated like a custom domain.",
  "code": "managed_domain_protected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

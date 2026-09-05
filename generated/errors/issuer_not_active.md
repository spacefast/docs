---
title: "issuer_not_active"
description: "The partner token issuer is registered but not active."
---

The partner token issuer is registered but not active.

**How to resolve:** Activate the issuer by completing its key-possession proof, then retry.

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
  "type": "https://spacefast.com/docs/errors/issuer_not_active",
  "title": "Issuer not active",
  "status": 400,
  "detail": "The partner token issuer is registered but not active.",
  "code": "issuer_not_active",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

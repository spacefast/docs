---
title: "principal_suspension_locked"
description: "The suspension was applied by Spacefast (legal/abuse) and cannot be lifted by the partner."
---

The suspension was applied by Spacefast (legal/abuse) and cannot be lifted by the partner.

**How to resolve:** Contact Spacefast support to resolve a platform-applied suspension.

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
  "type": "https://spacefast.com/docs/errors/principal_suspension_locked",
  "title": "Principal suspension locked",
  "status": 400,
  "detail": "The suspension was applied by Spacefast (legal/abuse) and cannot be lifted by the partner.",
  "code": "principal_suspension_locked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "connection_revoked"
description: "This connection was disconnected and its credential was purged."
---

This connection was disconnected and its credential was purged.

**How to resolve:** Connect the service again. The old connection stays as a record and cannot be reactivated.

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
  "type": "https://spacefast.com/docs/errors/connection_revoked",
  "title": "Connection revoked",
  "status": 400,
  "detail": "This connection was disconnected and its credential was purged.",
  "code": "connection_revoked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

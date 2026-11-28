---
title: "share_entry_has_no_secret"
description: "Only a password or a token entry has a secret to rotate."
---

Only a password or a token entry has a secret to rotate.

**How to resolve:** Rotate a `password` or `token` entry; remove and recreate any other entry instead.

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
  "type": "https://spacefast.com/docs/errors/share_entry_has_no_secret",
  "title": "Share entry has no secret",
  "status": 422,
  "detail": "Only a password or a token entry has a secret to rotate.",
  "code": "share_entry_has_no_secret",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

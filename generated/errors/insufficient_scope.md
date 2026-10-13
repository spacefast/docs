---
title: "insufficient_scope"
description: "The credential authenticated, but its granted scopes do not include a set this operation accepts."
---

The credential authenticated, but its granted scopes do not include a set this operation accepts.

**How to resolve:** Read the `WWW-Authenticate` challenge for the missing scopes, then request elevation or reconnect with them.

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
  "type": "https://spacefast.com/docs/errors/insufficient_scope",
  "title": "Insufficient scope",
  "status": 400,
  "detail": "The credential authenticated, but its granted scopes do not include a set this operation accepts.",
  "code": "insufficient_scope",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

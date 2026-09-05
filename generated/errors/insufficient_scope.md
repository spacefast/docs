---
title: "insufficient_scope"
description: "The grant does not carry a scope this operation accepts."
---

The grant does not carry a scope this operation accepts.

**How to resolve:** Re-authorize the grant with the scopes listed in the `WWW-Authenticate` challenge, then retry.

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
  "detail": "The grant does not carry a scope this operation accepts.",
  "code": "insufficient_scope",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

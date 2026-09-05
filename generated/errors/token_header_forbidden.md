---
title: "token_header_forbidden"
description: "The partner token carries a forbidden JOSE header."
---

The partner token carries a forbidden JOSE header.

**How to resolve:** Remove `jku`, `x5u`, `jwk`, and `x5c` from the token header.

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
  "type": "https://spacefast.com/docs/errors/token_header_forbidden",
  "title": "Token header forbidden",
  "status": 400,
  "detail": "The partner token carries a forbidden JOSE header.",
  "code": "token_header_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

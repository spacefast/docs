---
title: "token_alg_invalid"
description: "The partner token uses a signing algorithm that Spacefast does not allow."
---

The partner token uses a signing algorithm that Spacefast does not allow.

**How to resolve:** Sign the token with a registered Ed25519 key.

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
  "type": "https://spacefast.com/docs/errors/token_alg_invalid",
  "title": "Token alg invalid",
  "status": 400,
  "detail": "The partner token uses a signing algorithm that Spacefast does not allow.",
  "code": "token_alg_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

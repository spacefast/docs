---
title: "runtime_jwks_key_missing"
description: "No signing key matching the token's key id was found."
---

No signing key matching the token's key id was found.

**How to resolve:** Refresh the runtime JWKS to load the current signing keys.

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
  "type": "https://spacefast.com/docs/errors/runtime_jwks_key_missing",
  "title": "Runtime jwks key missing",
  "status": 400,
  "detail": "No signing key matching the token's key id was found.",
  "code": "runtime_jwks_key_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

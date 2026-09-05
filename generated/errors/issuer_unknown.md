---
title: "issuer_unknown"
description: "The token's issuer is not registered with Spacefast."
---

The token's issuer is not registered with Spacefast.

**How to resolve:** Register the issuer, or present a token whose `iss` matches a registered one.

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
  "type": "https://spacefast.com/docs/errors/issuer_unknown",
  "title": "Issuer unknown",
  "status": 400,
  "detail": "The token's issuer is not registered with Spacefast.",
  "code": "issuer_unknown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

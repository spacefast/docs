---
title: "token_signature_invalid"
description: "The partner token's signature did not verify against the issuer's keys."
---

The partner token's signature did not verify against the issuer's keys.

**How to resolve:** Sign the token with a key the issuer registration publishes.

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
  "type": "https://spacefast.com/docs/errors/token_signature_invalid",
  "title": "Token signature invalid",
  "status": 400,
  "detail": "The partner token's signature did not verify against the issuer's keys.",
  "code": "token_signature_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

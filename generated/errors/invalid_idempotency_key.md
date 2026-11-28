---
title: "invalid_idempotency_key"
description: "The request requires a valid Idempotency-Key or a secret for anonymous publish retries."
---

The request requires a valid Idempotency-Key or a secret for anonymous publish retries.

**How to resolve:** Send a non-empty `Idempotency-Key` of at most 255 characters. For an anonymous publish with that header, generate 32 cryptographically random bytes before the first request. Hex-encode them and send the resulting 64 characters as `X-Spacefast-Idempotency-Principal`. Store both values privately and reuse them unchanged only when retrying the same request body and path. Never log or share the principal.

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
  "type": "https://spacefast.com/docs/errors/invalid_idempotency_key",
  "title": "Invalid idempotency key",
  "status": 400,
  "detail": "The request requires a valid Idempotency-Key or a secret for anonymous publish retries.",
  "code": "invalid_idempotency_key",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

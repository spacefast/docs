---
title: "invalid_idempotency_key"
description: "The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal."
---

The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal.

**How to resolve:** Send a non-empty Idempotency-Key of at most 255 characters. Credential-free publish retries also need a stable, secret X-Spacefast-Idempotency-Principal containing 64 hexadecimal characters.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/invalid_idempotency_key",
  "title": "Invalid idempotency key",
  "status": 400,
  "detail": "The Idempotency-Key is missing or invalid, or an anonymous publish omitted its secret replay principal.",
  "code": "invalid_idempotency_key",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

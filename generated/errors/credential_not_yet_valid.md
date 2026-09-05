---
title: "credential_not_yet_valid"
description: "The API key is not valid until its `notBefore` time."
---

The API key is not valid until its `notBefore` time.

**How to resolve:** Wait until the key's `notBefore` time passes, or use a key that is already active.

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
  "type": "https://spacefast.com/docs/errors/credential_not_yet_valid",
  "title": "Credential not yet valid",
  "status": 400,
  "detail": "The API key is not valid until its `notBefore` time.",
  "code": "credential_not_yet_valid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

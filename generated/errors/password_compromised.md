---
title: "password_compromised"
description: "The password appears in a public breach corpus."
---

The password appears in a public breach corpus.

**How to resolve:** Pick a password you have not used anywhere else, then try again.

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
  "type": "https://spacefast.com/docs/errors/password_compromised",
  "title": "Password compromised",
  "status": 400,
  "detail": "The password appears in a public breach corpus.",
  "code": "password_compromised",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "sso_confirmation_invalid"
description: "The emailed code, or the account's authenticator code, didn't match."
---

The emailed code, or the account's authenticator code, didn't match.

**How to resolve:** Enter the newest code from the email, and a current authenticator code if asked. After three wrong codes, request a new one.

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
  "type": "https://spacefast.com/docs/errors/sso_confirmation_invalid",
  "title": "Sso confirmation invalid",
  "status": 422,
  "detail": "The emailed code, or the account's authenticator code, didn't match.",
  "code": "sso_confirmation_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

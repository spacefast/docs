---
title: "email_already_claimed"
description: "The address already belongs to an account."
---

The address already belongs to an account.

**How to resolve:** Sign in as that account, or use an address no account has verified.

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
  "type": "https://spacefast.com/docs/errors/email_already_claimed",
  "title": "Email already claimed",
  "status": 400,
  "detail": "The address already belongs to an account.",
  "code": "email_already_claimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

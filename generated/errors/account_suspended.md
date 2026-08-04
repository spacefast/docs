---
title: "account_suspended"
description: "This account is suspended for a policy or abuse violation and cannot be used."
---

This account is suspended for a policy or abuse violation and cannot be used.

**How to resolve:** Contact support to review the suspension if you believe it is a mistake.

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
  "type": "https://spacefast.com/docs/errors/account_suspended",
  "title": "Account suspended",
  "status": 400,
  "detail": "This account is suspended for a policy or abuse violation and cannot be used.",
  "code": "account_suspended",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

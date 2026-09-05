---
title: "superadmin_wpcom_account_required"
description: "The user has no linked WordPress.com account."
---

The user has no linked WordPress.com account.

**How to resolve:** Have the user link a WordPress.com account, then grant the role again.

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
  "type": "https://spacefast.com/docs/errors/superadmin_wpcom_account_required",
  "title": "Superadmin wpcom account required",
  "status": 400,
  "detail": "The user has no linked WordPress.com account.",
  "code": "superadmin_wpcom_account_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

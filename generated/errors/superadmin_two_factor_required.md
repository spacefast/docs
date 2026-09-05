---
title: "superadmin_two_factor_required"
description: "The user has no two-factor authentication enrolled."
---

The user has no two-factor authentication enrolled.

**How to resolve:** Have the user enroll two-factor authentication, then grant the role again.

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
  "type": "https://spacefast.com/docs/errors/superadmin_two_factor_required",
  "title": "Superadmin two factor required",
  "status": 400,
  "detail": "The user has no two-factor authentication enrolled.",
  "code": "superadmin_two_factor_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

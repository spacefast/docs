---
title: "jetpack_licensing_rejected"
description: "The Jetpack Licensing API refused the request."
---

The Jetpack Licensing API refused the request.

**How to resolve:** The partner account needs attention — an unaccepted Terms of Service, a revoked token, or an unknown product. Contact support; retrying will not help.

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
  "type": "https://spacefast.com/docs/errors/jetpack_licensing_rejected",
  "title": "Jetpack licensing rejected",
  "status": 400,
  "detail": "The Jetpack Licensing API refused the request.",
  "code": "jetpack_licensing_rejected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

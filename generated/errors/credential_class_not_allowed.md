---
title: "credential_class_not_allowed"
description: "This credential type cannot perform this action."
---

This credential type cannot perform this action.

**How to resolve:** Sign in with sf login or use a credential type accepted by this API surface.

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
  "type": "https://spacefast.com/docs/errors/credential_class_not_allowed",
  "title": "Credential class not allowed",
  "status": 400,
  "detail": "This credential type cannot perform this action.",
  "code": "credential_class_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

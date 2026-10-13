---
title: "jetpack_recovery_license_mismatch"
description: "The supplied license does not match this pending purchase."
---

The supplied license does not match this pending purchase.

**How to resolve:** Use a license owned by the configured partner for this product. It must be detached or attached to this space.

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
  "type": "https://spacefast.com/docs/errors/jetpack_recovery_license_mismatch",
  "title": "Jetpack recovery license mismatch",
  "status": 400,
  "detail": "The supplied license does not match this pending purchase.",
  "code": "jetpack_recovery_license_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

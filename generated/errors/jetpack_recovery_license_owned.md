---
title: "jetpack_recovery_license_owned"
description: "Another space already owns the supplied license."
---

Another space already owns the supplied license.

**How to resolve:** Recover the license on its original space. Do not assign one license to multiple spaces.

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
  "type": "https://spacefast.com/docs/errors/jetpack_recovery_license_owned",
  "title": "Jetpack recovery license owned",
  "status": 400,
  "detail": "Another space already owns the supplied license.",
  "code": "jetpack_recovery_license_owned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

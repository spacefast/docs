---
title: "jetpack_configuration_required"
description: "Jetpack credentials are missing for an existing license operation."
---

Jetpack credentials are missing for an existing license operation.

**How to resolve:** Restore the Jetpack licensing configuration, then retry the operation. Retained licenses must be revoked before the space is purged.

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
  "type": "https://spacefast.com/docs/errors/jetpack_configuration_required",
  "title": "Jetpack configuration required",
  "status": 400,
  "detail": "Jetpack credentials are missing for an existing license operation.",
  "code": "jetpack_configuration_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

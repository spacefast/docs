---
title: "jetpack_revocation_pending"
description: "Jetpack has not confirmed the license revocation."
---

Jetpack has not confirmed the license revocation.

**How to resolve:** Retry the operation. Spacefast checks the existing license before another revocation request.

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
  "type": "https://spacefast.com/docs/errors/jetpack_revocation_pending",
  "title": "Jetpack revocation pending",
  "status": 400,
  "detail": "Jetpack has not confirmed the license revocation.",
  "code": "jetpack_revocation_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

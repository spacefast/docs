---
title: "jetpack_issuance_not_pending"
description: "This product has no unresolved Jetpack purchase."
---

This product has no unresolved Jetpack purchase.

**How to resolve:** Read the current Jetpack status before submitting another recovery request.

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
  "type": "https://spacefast.com/docs/errors/jetpack_issuance_not_pending",
  "title": "Jetpack issuance not pending",
  "status": 400,
  "detail": "This product has no unresolved Jetpack purchase.",
  "code": "jetpack_issuance_not_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "jetpack_issuance_unresolved"
description: "A Jetpack purchase has no confirmed receipt."
---

A Jetpack purchase has no confirmed receipt.

**How to resolve:** Ask a superadmin to read GET /superadmin/spaces/{spaceId}/jetpack, then resolve the purchase through POST /superadmin/spaces/{spaceId}/jetpack/recover. Adopt the verified license or confirm that no license was issued. Do not purchase another license before recovery.

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
  "type": "https://spacefast.com/docs/errors/jetpack_issuance_unresolved",
  "title": "Jetpack issuance unresolved",
  "status": 400,
  "detail": "A Jetpack purchase has no confirmed receipt.",
  "code": "jetpack_issuance_unresolved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "jetpack_issuance_changed"
description: "The pending purchase changed after the recovery request was prepared."
---

The pending purchase changed after the recovery request was prepared.

**How to resolve:** Read the current Jetpack status. Submit recovery with that purchase's startedAt value as expectedStartedAt.

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
  "type": "https://spacefast.com/docs/errors/jetpack_issuance_changed",
  "title": "Jetpack issuance changed",
  "status": 400,
  "detail": "The pending purchase changed after the recovery request was prepared.",
  "code": "jetpack_issuance_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

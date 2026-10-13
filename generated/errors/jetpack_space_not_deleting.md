---
title: "jetpack_space_not_deleting"
description: "License cleanup requires a space marked for deletion."
---

License cleanup requires a space marked for deletion.

**How to resolve:** Use the authorized space deletion flow before requesting license cleanup.

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
  "type": "https://spacefast.com/docs/errors/jetpack_space_not_deleting",
  "title": "Jetpack space not deleting",
  "status": 400,
  "detail": "License cleanup requires a space marked for deletion.",
  "code": "jetpack_space_not_deleting",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

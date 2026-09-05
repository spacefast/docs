---
title: "files_mode_does_not_support_spa"
description: "Directory listing and single-page-app fallback cannot both be on for one Space."
---

Directory listing and single-page-app fallback cannot both be on for one Space.

**How to resolve:** Turn off `listing` or clear the SPA `fallback` in the Space settings.

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
  "type": "https://spacefast.com/docs/errors/files_mode_does_not_support_spa",
  "title": "Files mode does not support spa",
  "status": 400,
  "detail": "Directory listing and single-page-app fallback cannot both be on for one Space.",
  "code": "files_mode_does_not_support_spa",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

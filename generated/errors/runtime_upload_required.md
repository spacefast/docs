---
title: "runtime_upload_required"
description: "The publish still has files that have to go through the runtime upload session."
---

The publish still has files that have to go through the runtime upload session.

**How to resolve:** Upload the remaining files through the upload session, then finalize the version.

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
  "type": "https://spacefast.com/docs/errors/runtime_upload_required",
  "title": "Runtime upload required",
  "status": 400,
  "detail": "The publish still has files that have to go through the runtime upload session.",
  "code": "runtime_upload_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

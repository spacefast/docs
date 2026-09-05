---
title: "manifest_duplicate_path"
description: "Two entries resolve to the same path once canonicalized."
---

Two entries resolve to the same path once canonicalized.

**How to resolve:** Remove or rename one of the entries at the `path` in the error details, then retry.

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
  "type": "https://spacefast.com/docs/errors/manifest_duplicate_path",
  "title": "Manifest duplicate path",
  "status": 400,
  "detail": "Two entries resolve to the same path once canonicalized.",
  "code": "manifest_duplicate_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "version_file_too_large"
description: "A file in the version is larger than the plan's per-file byte limit."
---

A file in the version is larger than the plan's per-file byte limit.

**How to resolve:** Shrink or drop the file at `path` in the error details, or move the team to a plan with a higher limit.

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
  "type": "https://spacefast.com/docs/errors/version_file_too_large",
  "title": "Version file too large",
  "status": 400,
  "detail": "A file in the version is larger than the plan's per-file byte limit.",
  "code": "version_file_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

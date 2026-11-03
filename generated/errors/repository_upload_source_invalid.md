---
title: "repository_upload_source_invalid"
description: "The version contains empty, duplicate, or invalid repository paths."
---

The version contains empty, duplicate, or invalid repository paths.

**How to resolve:** Use a version containing unique valid repository file paths.

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
  "type": "https://spacefast.com/docs/errors/repository_upload_source_invalid",
  "title": "Repository upload source invalid",
  "status": 400,
  "detail": "The version contains empty, duplicate, or invalid repository paths.",
  "code": "repository_upload_source_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

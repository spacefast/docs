---
title: "repository_source_already_initialized"
description: "The repository already has source history."
---

The repository already has source history.

**How to resolve:** Read and edit its existing Git source instead of initializing it again.

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
  "type": "https://spacefast.com/docs/errors/repository_source_already_initialized",
  "title": "Repository source already initialized",
  "status": 400,
  "detail": "The repository already has source history.",
  "code": "repository_source_already_initialized",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

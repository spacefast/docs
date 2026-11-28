---
title: "github_repository_changed"
description: "The destination changed while its source was being copied."
---

The destination changed while its source was being copied.

**How to resolve:** Inspect the destination before retrying. Existing commits were preserved; only identical copied refs can resume.

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
  "type": "https://spacefast.com/docs/errors/github_repository_changed",
  "title": "Github repository changed",
  "status": 422,
  "detail": "The destination changed while its source was being copied.",
  "code": "github_repository_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

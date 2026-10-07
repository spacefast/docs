---
title: "repository_path_invalid"
description: "The repository provider refused the requested file path."
---

The repository provider refused the requested file path.

**How to resolve:** Use an exact repository-relative file path from the file listing, without a leading slash or dot segments.

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
  "type": "https://spacefast.com/docs/errors/repository_path_invalid",
  "title": "Repository path invalid",
  "status": 400,
  "detail": "The repository provider refused the requested file path.",
  "code": "repository_path_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

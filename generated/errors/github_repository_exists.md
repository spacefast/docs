---
title: "github_repository_exists"
description: "The repository name is already in use with different visibility."
---

The repository name is already in use with different visibility.

**How to resolve:** Choose another repository name, or explicitly select the existing destination.

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
  "type": "https://spacefast.com/docs/errors/github_repository_exists",
  "title": "Github repository exists",
  "status": 422,
  "detail": "The repository name is already in use with different visibility.",
  "code": "github_repository_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

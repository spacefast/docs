---
title: "repository_commit_not_found"
description: "The commit you asked to read does not exist in this repository."
---

The commit you asked to read does not exist in this repository.

**How to resolve:** Read the repository's commit history and use an existing commit SHA.

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
  "type": "https://spacefast.com/docs/errors/repository_commit_not_found",
  "title": "Repository commit not found",
  "status": 400,
  "detail": "The commit you asked to read does not exist in this repository.",
  "code": "repository_commit_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

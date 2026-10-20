---
title: "repository_commit_unchanged"
description: "The commit changes no files: the branch already holds this exact tree, so there is nothing to save."
---

The commit changes no files: the branch already holds this exact tree, so there is nothing to save.

**How to resolve:** Change a file before you commit. To build the saved source again, retry its last build (`sf builds retry <buildId>`).

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
  "type": "https://spacefast.com/docs/errors/repository_commit_unchanged",
  "title": "Repository commit unchanged",
  "status": 400,
  "detail": "The commit changes no files: the branch already holds this exact tree, so there is nothing to save.",
  "code": "repository_commit_unchanged",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

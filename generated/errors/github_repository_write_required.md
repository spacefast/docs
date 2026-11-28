---
title: "github_repository_write_required"
description: "Your GitHub account cannot write to the selected destination."
---

Your GitHub account cannot write to the selected destination.

**How to resolve:** Ask its owner for write access, then authorize GitHub again.

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
  "type": "https://spacefast.com/docs/errors/github_repository_write_required",
  "title": "Github repository write required",
  "status": 422,
  "detail": "Your GitHub account cannot write to the selected destination.",
  "code": "github_repository_write_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

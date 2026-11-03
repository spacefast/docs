---
title: "repository_patch_invalid"
description: "The repository refused the diff: it is malformed or does not apply to the selected base branch."
---

The repository refused the diff: it is malformed or does not apply to the selected base branch.

**How to resolve:** Read the files from the base branch, rebuild the unified diff against them (every file needs its `diff --git` header and hunks must match the current lines), and send it again.

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
  "type": "https://spacefast.com/docs/errors/repository_patch_invalid",
  "title": "Repository patch invalid",
  "status": 400,
  "detail": "The repository refused the diff: it is malformed or does not apply to the selected base branch.",
  "code": "repository_patch_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

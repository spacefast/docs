---
title: "repository_stale_base"
description: "The branch moved after this change was built on it."
---

The branch moved after this change was built on it.

**How to resolve:** Re-read the branch at the `headSha` in the error details and rebuild the commit.

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
  "type": "https://spacefast.com/docs/errors/repository_stale_base",
  "title": "Repository stale base",
  "status": 400,
  "detail": "The branch moved after this change was built on it.",
  "code": "repository_stale_base",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

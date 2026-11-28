---
title: "repository_not_ready"
description: "The Space's repository storage is still getting ready."
---

The Space's repository storage is still getting ready.

**How to resolve:** Wait for the repository setup or source sync to finish, then retry. If the connection shows a failed sync, check the repository connection on the Space's **Builds** page and resolve the sync error before trying again.

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
  "type": "https://spacefast.com/docs/errors/repository_not_ready",
  "title": "Repository not ready",
  "status": 409,
  "detail": "The Space's repository storage is still getting ready.",
  "code": "repository_not_ready",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

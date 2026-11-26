---
title: "fork_preview_anonymous_only"
description: "Fork pull request previews cannot carry your signed-in account."
---

Fork pull request previews cannot carry your signed-in account.

**How to resolve:** Open the preview URL directly if it is public. For signed-in access, build the change from a branch in the connected repository.

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
  "type": "https://spacefast.com/docs/errors/fork_preview_anonymous_only",
  "title": "Fork preview anonymous only",
  "status": 422,
  "detail": "Fork pull request previews cannot carry your signed-in account.",
  "code": "fork_preview_anonymous_only",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

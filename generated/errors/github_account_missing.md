---
title: "github_account_missing"
description: "The GitHub installation has no account to receive the repository."
---

The GitHub installation has no account to receive the repository.

**How to resolve:** Select a GitHub installation with an account and retry.

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
  "type": "https://spacefast.com/docs/errors/github_account_missing",
  "title": "Github account missing",
  "status": 422,
  "detail": "The GitHub installation has no account to receive the repository.",
  "code": "github_account_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "github_account_mismatch"
description: "GitHub authorization used a different account from the selected installation."
---

GitHub authorization used a different account from the selected installation.

**How to resolve:** Authorize the selected GitHub account, or select its installation and start again.

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
  "type": "https://spacefast.com/docs/errors/github_account_mismatch",
  "title": "Github account mismatch",
  "status": 422,
  "detail": "GitHub authorization used a different account from the selected installation.",
  "code": "github_account_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

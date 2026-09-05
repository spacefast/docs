---
title: "source_branch_missing"
description: "The workspace project branch no longer exists in CodeStorage."
---

The workspace project branch no longer exists in CodeStorage.

**How to resolve:** Restore the project branch or create a workspace for an existing branch.

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
  "type": "https://spacefast.com/docs/errors/source_branch_missing",
  "title": "Source branch missing",
  "status": 400,
  "detail": "The workspace project branch no longer exists in CodeStorage.",
  "code": "source_branch_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

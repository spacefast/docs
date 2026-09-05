---
title: "source_branch_changed"
description: "The project branch changed after the workspace read its saved base."
---

The project branch changed after the workspace read its saved base.

**How to resolve:** Sync the workspace. Read its new revision before committing.

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
  "type": "https://spacefast.com/docs/errors/source_branch_changed",
  "title": "Source branch changed",
  "status": 400,
  "detail": "The project branch changed after the workspace read its saved base.",
  "code": "source_branch_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

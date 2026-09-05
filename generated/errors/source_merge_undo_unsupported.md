---
title: "source_merge_undo_unsupported"
description: "The selected source commit is a merge commit with multiple parents."
---

The selected source commit is a merge commit with multiple parents.

**How to resolve:** Select a non-merge source commit to prepare an undo.

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
  "type": "https://spacefast.com/docs/errors/source_merge_undo_unsupported",
  "title": "Source merge undo unsupported",
  "status": 400,
  "detail": "The selected source commit is a merge commit with multiple parents.",
  "code": "source_merge_undo_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

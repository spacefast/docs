---
title: "source_commit_not_saved"
description: "The selected commit is not in the project branch's saved first-parent history."
---

The selected commit is not in the project branch's saved first-parent history.

**How to resolve:** Select a saved source commit instead of an internal workspace snapshot.

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
  "type": "https://spacefast.com/docs/errors/source_commit_not_saved",
  "title": "Source commit not saved",
  "status": 400,
  "detail": "The selected commit is not in the project branch's saved first-parent history.",
  "code": "source_commit_not_saved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

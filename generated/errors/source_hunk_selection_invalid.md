---
title: "source_hunk_selection_invalid"
description: "The selected hunks are duplicated or cannot be staged independently."
---

The selected hunks are duplicated or cannot be staged independently.

**How to resolve:** Select each hunk once. Select whole files for binary and structural changes.

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
  "type": "https://spacefast.com/docs/errors/source_hunk_selection_invalid",
  "title": "Source hunk selection invalid",
  "status": 400,
  "detail": "The selected hunks are duplicated or cannot be staged independently.",
  "code": "source_hunk_selection_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

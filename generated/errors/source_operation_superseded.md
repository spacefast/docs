---
title: "source_operation_superseded"
description: "The source operation no longer owns the workspace pending state."
---

The source operation no longer owns the workspace pending state.

**How to resolve:** Read the current workspace status before sending another operation.

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
  "type": "https://spacefast.com/docs/errors/source_operation_superseded",
  "title": "Source operation superseded",
  "status": 400,
  "detail": "The source operation no longer owns the workspace pending state.",
  "code": "source_operation_superseded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

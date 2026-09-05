---
title: "source_workspace_connection_in_use"
description: "An open source workspace uses this repository connection."
---

An open source workspace uses this repository connection.

**How to resolve:** Close each open source workspace. Then retry the repository connection change.

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
  "type": "https://spacefast.com/docs/errors/source_workspace_connection_in_use",
  "title": "Source workspace connection in use",
  "status": 400,
  "detail": "An open source workspace uses this repository connection.",
  "code": "source_workspace_connection_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

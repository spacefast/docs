---
title: "source_workspace_dirty"
description: "The workspace contains pending staged or working changes."
---

The workspace contains pending staged or working changes.

**How to resolve:** Commit the changes or explicitly request discarding them when closing.

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
  "type": "https://spacefast.com/docs/errors/source_workspace_dirty",
  "title": "Source workspace dirty",
  "status": 400,
  "detail": "The workspace contains pending staged or working changes.",
  "code": "source_workspace_dirty",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

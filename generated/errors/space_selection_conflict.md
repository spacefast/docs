---
title: "space_selection_conflict"
description: "`--access` applies only when a publish creates a Space, and this directory is already linked to one."
---

`--access` applies only when a publish creates a Space, and this directory is already linked to one.

**How to resolve:** Drop `--access`, or publish into a new Space with no existing selection.

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
  "type": "https://spacefast.com/docs/errors/space_selection_conflict",
  "title": "Space selection conflict",
  "status": 400,
  "detail": "`--access` applies only when a publish creates a Space, and this directory is already linked to one.",
  "code": "space_selection_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

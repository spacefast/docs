---
title: "space_selection_conflict"
description: "The command asked to create a Space while this directory already selects one."
---

The command asked to create a Space while this directory already selects one.

**How to resolve:** Drop --slug to publish to the selected Space, or publish from an unlinked directory to create a new one.

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
  "detail": "The command asked to create a Space while this directory already selects one.",
  "code": "space_selection_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

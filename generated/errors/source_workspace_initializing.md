---
title: "source_workspace_initializing"
description: "The source workspace has not finished creating its baseline snapshots."
---

The source workspace has not finished creating its baseline snapshots.

**How to resolve:** Retry workspace creation with the same operation ID and input.

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
  "type": "https://spacefast.com/docs/errors/source_workspace_initializing",
  "title": "Source workspace initializing",
  "status": 400,
  "detail": "The source workspace has not finished creating its baseline snapshots.",
  "code": "source_workspace_initializing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

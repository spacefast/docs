---
title: "source_workspaces_unavailable"
description: "Source workspaces are disabled because the provider cannot compare exact snapshots."
---

Source workspaces are disabled because the provider cannot compare exact snapshots.

**How to resolve:** Wait for native provider support before using workspace tools. This request did not change source files or branches.

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
  "type": "https://spacefast.com/docs/errors/source_workspaces_unavailable",
  "title": "Source workspaces unavailable",
  "status": 400,
  "detail": "Source workspaces are disabled because the provider cannot compare exact snapshots.",
  "code": "source_workspaces_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

---
title: "source_snapshot_changed"
description: "CodeStorage created a managed branch at an unexpected source snapshot."
---

CodeStorage created a managed branch at an unexpected source snapshot.

**How to resolve:** Retry the pending operation before sending another source write.

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
  "type": "https://spacefast.com/docs/errors/source_snapshot_changed",
  "title": "Source snapshot changed",
  "status": 400,
  "detail": "CodeStorage created a managed branch at an unexpected source snapshot.",
  "code": "source_snapshot_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

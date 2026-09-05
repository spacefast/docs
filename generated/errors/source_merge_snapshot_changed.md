---
title: "source_merge_snapshot_changed"
description: "A managed merge ref no longer matches the pinned source snapshot."
---

A managed merge ref no longer matches the pinned source snapshot.

**How to resolve:** Retry the pending operation with its original ID and input.

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
  "type": "https://spacefast.com/docs/errors/source_merge_snapshot_changed",
  "title": "Source merge snapshot changed",
  "status": 400,
  "detail": "A managed merge ref no longer matches the pinned source snapshot.",
  "code": "source_merge_snapshot_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

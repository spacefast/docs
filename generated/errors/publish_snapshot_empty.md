---
title: "publish_snapshot_empty"
description: "The publish resolved to no files at all."
---

The publish resolved to no files at all.

**How to resolve:** Point the publish at a directory that contains the files to serve.

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
  "type": "https://spacefast.com/docs/errors/publish_snapshot_empty",
  "title": "Publish snapshot empty",
  "status": 400,
  "detail": "The publish resolved to no files at all.",
  "code": "publish_snapshot_empty",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

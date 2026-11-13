---
title: "publish_file_missing"
description: "A declared file was never uploaded, so the publish cannot finalize."
---

A declared file was never uploaded, so the publish cannot finalize.

**How to resolve:** Read `details.path` and include the bytes for that declared file. For an inline request, include its required file content; for an upload session, finish uploading missing files before completing it. Repeating finalize without those bytes will fail again. See [Publishing](/docs/publishing/).

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
  "type": "https://spacefast.com/docs/errors/publish_file_missing",
  "title": "Publish file missing",
  "status": 400,
  "detail": "A declared file was never uploaded, so the publish cannot finalize.",
  "code": "publish_file_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

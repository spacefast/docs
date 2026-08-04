---
title: "publish_bytes_missing"
description: "The publish has no complete staged content to materialize."
---

The publish has no complete staged content to materialize.

**How to resolve:** Finish uploading the staged content, or start a new publish.

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
  "type": "https://spacefast.com/docs/errors/publish_bytes_missing",
  "title": "Publish bytes missing",
  "status": 400,
  "detail": "The publish has no complete staged content to materialize.",
  "code": "publish_bytes_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

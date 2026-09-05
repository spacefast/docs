---
title: "publish_file_missing"
description: "The inline publish did not carry a file the manifest declares."
---

The inline publish did not carry a file the manifest declares.

**How to resolve:** Include every declared file in the archive, then publish again.

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
  "detail": "The inline publish did not carry a file the manifest declares.",
  "code": "publish_file_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

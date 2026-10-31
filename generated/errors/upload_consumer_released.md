---
title: "upload_consumer_released"
description: "The upload operation has already been released."
---

The upload operation has already been released.

**How to resolve:** Use a new operationId for another operation.

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
  "type": "https://spacefast.com/docs/errors/upload_consumer_released",
  "title": "Upload consumer released",
  "status": 400,
  "detail": "The upload operation has already been released.",
  "code": "upload_consumer_released",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

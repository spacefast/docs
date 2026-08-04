---
title: "storage_delete_forbidden"
description: "The current Zero user did not upload this object."
---

The current Zero user did not upload this object.

**How to resolve:** Sign in as the original uploader before deleting the object.

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
  "type": "https://spacefast.com/docs/errors/storage_delete_forbidden",
  "title": "Storage delete forbidden",
  "status": 400,
  "detail": "The current Zero user did not upload this object.",
  "code": "storage_delete_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

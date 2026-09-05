---
title: "storage_delete_forbidden"
description: "Only the uploader can delete this storage object."
---

Only the uploader can delete this storage object.

**How to resolve:** Delete the object as the identity that uploaded it.

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
  "detail": "Only the uploader can delete this storage object.",
  "code": "storage_delete_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>

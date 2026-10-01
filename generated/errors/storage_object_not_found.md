---
title: "storage_object_not_found"
description: "The requested storage object does not exist."
---

The requested storage object does not exist.

**How to resolve:** Check the object id or upload the object again.

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
  "type": "https://spacefast.com/docs/errors/storage_object_not_found",
  "title": "Storage object not found",
  "status": 400,
  "detail": "The requested storage object does not exist.",
  "code": "storage_object_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
